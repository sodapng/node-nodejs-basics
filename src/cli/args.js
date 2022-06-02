import { argv } from 'node:process'

export const parseArgs = () => {
  // argv
  //   .slice(2)
  //   .reduce((acc, key, i, arr, value = arr[i + 1]) => {
  //     return !(i % 2) ? acc.push(`${key} is ${value}`) && acc : acc
  //   }, [])
  //   .forEach((item) => {
  //     console.log(item)
  //   })

  // A better solution :D
  const argValues = argv.slice(2)

  for (let i = 0; i < argValues.length; i += 2) {
    console.log(`${argValues[i]} is ${argValues[i + 1]}`)
  }
}

parseArgs()
