import { createReadStream } from 'node:fs'
import { resolve } from 'node:path'
import { stdout } from 'node:process'
import { pipeline } from 'node:stream/promises'
import getDirname from '../utils/dirname.js'

const __dirname = getDirname(import.meta.url)

const { createHash } = await import('node:crypto')

export const calculateHash = async () => {
  const hash = createHash('sha256')

  const fileToPath = resolve(__dirname, 'files', 'fileToCalculateHashFor.txt')

  const rs = createReadStream(fileToPath)
  await pipeline(rs, hash.setEncoding('hex'), stdout)
}

calculateHash()
