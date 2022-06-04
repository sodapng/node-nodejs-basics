import { existsSync } from 'node:fs'
import { rename as renameFile } from 'node:fs/promises'
import { resolve } from 'path'
import getDirname from '../utils/dirname.js'

const __dirname = getDirname(import.meta.url)

export const rename = async () => {
  try {
    const fileToPath = resolve(__dirname, 'files', 'wrongFilename.txt')
    const fileFromPath = resolve(__dirname, 'files', 'properFilename.md')

    if (
      existsSync(fileFromPath) ||
      (existsSync(fileToPath) && existsSync(fileFromPath))
    )
      throw new Error('The file exists')

    await renameFile(fileToPath, fileFromPath)
  } catch (error) {
    console.error(new Error('FS operation failed'))
  }
}

rename()
