export function base62Hash(id: number) {
  const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  const length = 62
  let shortCode = ""
  if (id == 0) {
    return alphabets[0]
  }
  let num = id
  while (num > 0) {
    const remainder = num % length
    shortCode = alphabets[remainder] + shortCode
    num = Math.floor(num / length)
  }
  return shortCode
}
