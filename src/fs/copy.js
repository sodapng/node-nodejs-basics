import { cp } from 'node:fs/promises'
import { resolve } from 'path'
import getDirname from '../utils/dirname.js'
import isExists from '../utils/isExists.js'

const __dirname = getDirname(import.meta.url)

export const copy = async () => {
  try {
    const folderToPath = resolve(__dirname, 'files')
    const folderFromPath = resolve(__dirname, 'files_copy')

    if (!(await isExists(folderToPath)) || !(await isExists(folderFromPath)))
      throw new Error('FS operation failed')

    await cp(folderToPath, folderFromPath, {
      errorOnExist: true,
      recursive: true,
      force: false,
    })
  } catch (error) {
    console.error(error.message)
  }
}

copy()
