import { env } from 'process'

export const parseEnv = () => {
  return Object.entries(env)
    .reduce(
      (acc, [key, value]) =>
        /^RSS_/.test(key) ? acc.push(`${key}=${value}`) && acc : acc,
      []
    )
    .join('; ')

  // A better solution :D
  // let result = ''

  // for (const key in env) {
  //   if (key.startsWith('RSS_')) {
  //     result += `${key}=${env[key]}; `
  //   }
  // }

  // return result.replace(/; $/, '')
}

console.log(parseEnv())
