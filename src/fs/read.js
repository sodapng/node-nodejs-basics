import { createReadStream } from 'node:fs'
import { resolve } from 'node:path'
import { stdout } from 'node:process'
import { pipeline } from 'node:stream/promises'
import getDirname from '../utils/dirname.js'

const __dirname = getDirname(import.meta.url)

export const read = async () => {
  try {
    const fileToPath = resolve(__dirname, 'files', 'fileToRead.txt')
    const rs = createReadStream(fileToPath, {
      encoding: 'utf8',
    })
    await pipeline(rs, stdout)
  } catch (error) {
    console.error(new Error('FS operation failed'))
  }
}

read()
