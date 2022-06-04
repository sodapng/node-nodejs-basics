import { writeFile } from 'node:fs/promises'
import { resolve } from 'path'
import getDirname from '../utils/dirname.js'
import isExists from '../utils/isExists.js'

const __dirname = getDirname(import.meta.url)

export const create = async () => {
  try {
    const fileToPath = resolve(__dirname, 'files', 'fresh.txt')

    if (!(await isExists(fileToPath))) throw new Error('FS operation failed')

    await writeFile(fileToPath, 'I am fresh and young', {
      flag: 'wx',
    })
  } catch (error) {
    console.error(error.message)
  }
}

create()
