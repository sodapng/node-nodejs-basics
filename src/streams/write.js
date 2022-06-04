import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { stdin } from 'node:process'
import { pipeline } from 'node:stream/promises'
import getDirname from '../utils/dirname.js'

const __dirname = getDirname(import.meta.url)

export const write = async () => {
  const fileToPath = resolve(__dirname, 'files', 'fileToWrite.txt')
  const ws = createWriteStream(fileToPath)
  await pipeline(stdin, ws)
}

write()
