import { createReadStream, createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { pipeline } from 'node:stream/promises'
import { createGzip } from 'node:zlib'
import getDirname from '../utils/dirname.js'

const __dirname = getDirname(import.meta.url)

export const compress = async () => {
  const fileToPath = resolve(__dirname, 'files', 'fileToCompress.txt')
  const fileFromPath = resolve(__dirname, 'files', 'archive.gz')
  const gzip = createGzip()
  const rs = createReadStream(fileToPath)
  const ws = createWriteStream(fileFromPath)
  await pipeline(rs, gzip, ws)
}

compress()
