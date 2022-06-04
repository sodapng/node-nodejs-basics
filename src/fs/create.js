import { writeFile } from 'node:fs/promises'
import { resolve } from 'path'
import getDirname from '../utils/dirname.js'

const __dirname = getDirname(import.meta.url)

export const create = async () => {
  try {
    const filePath = resolve(__dirname, 'files', 'fresh.txt')
    await writeFile(filePath, 'I am fresh and young', {
      flag: 'wx',
    })
  } catch (error) {
    console.error(new Error('FS operation failed'))
  }
}

create()
