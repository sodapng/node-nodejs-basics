import { createHash } from 'node:crypto'
import { createReadStream } from 'node:fs'
import { resolve } from 'node:path'
import { pipeline } from 'node:stream/promises'
import getDirname from '../utils/dirname.js'

const __dirname = getDirname(import.meta.url)

export const calculateHash = async () => {
  const fileToPath = resolve(__dirname, 'files', 'fileToCalculateHashFor.txt')
  const rs = createReadStream(fileToPath)
  const hash = createHash('sha256')

  return new Promise(async (resolve, reject) => {
    // rs.on('error', (err) => reject(err))
    //   .on('data', (data) => hash.update(data))
    //   .on('end', () => resolve(hash.digest('hex')))

    // pipeline(rs, hash, (err) =>
    //   err ? reject(err) : resolve(hash.digest('hex'))
    // )

    try {
      await pipeline(rs, hash)
      resolve(hash.digest('hex'))
    } catch (error) {
      reject(error)
    }
  })
}

console.log(await calculateHash())
