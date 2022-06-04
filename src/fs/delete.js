import { rm } from 'node:fs/promises'
import { resolve } from 'node:path'
import getDirname from '../utils/dirname.js'

const __dirname = getDirname(import.meta.url)

export const remove = async () => {
  try {
    const fileToPath = resolve(__dirname, 'files', 'fileToRemove.txt')
    await rm(fileToPath)
  } catch (error) {
    console.error(new Error('FS operation failed'))
  }
}

remove()
