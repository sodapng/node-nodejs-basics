import { spawn } from 'node:child_process'
import { stdin, stdout } from 'node:process'

export const spawnChildProcess = async (args) => {
  const subprocess = spawn('node', args, {
    stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
  })

  subprocess.stderr.on('data', (data) => {
    console.error(`child process stderr: ${data}`)
  })

  subprocess.on('close', (code) => {
    console.log(`child process exited with code ${code}`)
  })

  subprocess.on('message', (msg) => {
    console.log('PARENT got message:', msg)
  })

  subprocess.send('Hello, child process!')

  stdin.pipe(subprocess.stdin)
  subprocess.stdout.pipe(stdout)
}

spawnChildProcess(['src/cp/files/script.js', '--propName', 'value'])
