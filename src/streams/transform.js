import { stdin, stdout } from 'node:process'
import { Transform } from 'node:stream'
import { pipeline } from 'node:stream/promises'

export const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, _, callback) {
      callback(null, `${chunk}`.trimStart().split('').reverse().join('') + '\n')
    },
  })

  await pipeline(stdin, reverseTransform, stdout)
}

transform()
