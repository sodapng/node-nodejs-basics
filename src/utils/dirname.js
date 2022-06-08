import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

export default function getDirname(importMetaUrl) {
  return dirname(fileURLToPath(importMetaUrl))
}
