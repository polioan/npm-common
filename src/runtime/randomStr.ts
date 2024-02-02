export function randomStr(
  length: number | undefined = 10,
  abc:
    | string
    | undefined = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!№;%:?*()_+='
) {
  let result = ''
  for (let i = 0; i < length; i += 1) {
    result += abc.charAt(Math.floor(Math.random() * abc.length))
  }
  return result
}
