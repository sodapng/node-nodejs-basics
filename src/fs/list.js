import { readdir } from 'node:fs/promises'
import { resolve } from 'node:path'
import getDirname from '../utils/dirname.js'
import isExists from '../utils/isExists.js'

const __dirname = getDirname(import.meta.url)

export const list = async () => {
  try {
    const folderToPath = resolve(__dirname, 'files')

    if (!(await isExists(fileToPath))) throw new Error('FS operation failed')

    const files = await readdir(folderToPath)
    console.log(files)
  } catch (error) {
    console.error(error.message)
  }
}

list()
