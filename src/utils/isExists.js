import { access } from 'node:fs/promises'

export default async function isExists(path) {
  try {
    await access(path)
    return true
  } catch (error) {
    return false
  }
}
