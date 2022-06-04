import { rm } from 'node:fs/promises'
import { resolve } from 'node:path'
import getDirname from '../utils/dirname.js'
import isExists from '../utils/isExists.js'

const __dirname = getDirname(import.meta.url)

export const remove = async () => {
  try {
    const fileToPath = resolve(__dirname, 'files', 'fileToRemove.txt')

    if (!(await isExists(fileToPath))) throw new Error('FS operation failed')

    await rm(fileToPath)
  } catch (error) {
    console.error(error.message)
  }
}

remove()
