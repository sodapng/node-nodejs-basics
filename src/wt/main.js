import { cpus } from 'node:os'
import { resolve } from 'node:path'
import { Worker } from 'node:worker_threads'
import getDirname from '../utils/dirname.js'

const __dirname = getDirname(import.meta.url)

export const performCalculations = async () => {
  const workers = []
  const numOfCpus = cpus().length
  const filename = resolve(__dirname, 'worker.js')

  for (let i = 0; i < numOfCpus; i++) {
    const workerData = {
      n: 10 + i,
    }

    workers.push(
      new Promise((resolve, reject) => {
        const worker = new Worker(filename, {
          workerData,
        })

        worker.on('message', resolve)
        worker.on('error', reject)
      })
    )
  }

  const result = await Promise.allSettled(workers)

  return result.map(({ value }) => ({
    status: value ? 'resolved' : 'error',
    data: value ? value : null,
  }))
}

console.log(await performCalculations())
