const args = process.argv.slice(2)

console.log(`Total number of arguments is ${args.length}`)
console.log(`Arguments: ${JSON.stringify(args)}`)

const echoInput = (chunk) => {
  const chunkStringified = chunk.toString()
  if (chunkStringified.includes('CLOSE')) process.exit(0)
  process.stdout.write(`Received from master process: ${chunk.toString()}\n`)
}

process.stdin.on('data', echoInput)

process.on('message', (msg) => {
  console.log('CHILD got message:', msg.message)
  process.send('Hello, parent process! Just let me check.')
  process.send(
    `${
      process.pid === msg.pid
        ? 'PID matches. Well done!'
        : 'Something went wrong.'
    }`
  )
})
