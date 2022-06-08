import { argv } from 'node:process'

export const parseArgs = () => {
  return argv
    .slice(2)
    .reduce(
      (acc, key, i, arr, value = arr[i + 1]) =>
        !(i % 2) ? acc.push(`${key} is ${value}`) && acc : acc,
      []
    )
    .join(', ')

  // A better solution :D
  // const argValues = argv.slice(2)
  // let result = ''

  // for (let i = 0; i < argValues.length; i += 2) {
  //   const [key, value] = [argValues[i], argValues[i + 1]]
  //   result += `${key} is ${value}, `
  // }

  // return result.replace(/, $/, '')
}

console.log(parseArgs())
