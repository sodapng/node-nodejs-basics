import { cp } from 'node:fs/promises'
import { resolve } from 'path'
import getDirname from '../utils/dirname.js'

const __dirname = getDirname(import.meta.url)

export const copy = async () => {
  try {
    const folderToPath = resolve(__dirname, 'files')
    const folderFromPath = resolve(__dirname, 'files_copy')
    await cp(folderToPath, folderFromPath, {
      errorOnExist: true,
      recursive: true,
      force: false,
    })
  } catch (error) {
    console.error(new Error('FS operation failed'))
  }
}

copy()
