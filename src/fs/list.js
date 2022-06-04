import { readdir } from 'node:fs/promises'
import { resolve } from 'node:path'
import getDirname from '../utils/dirname.js'

const __dirname = getDirname(import.meta.url)

export const list = async () => {
  try {
    const folderToPath = resolve(__dirname, 'files')
    const files = await readdir(folderToPath)
    console.log(files)
  } catch (error) {
    console.error(new Error('FS operation failed'))
  }
}

list()
