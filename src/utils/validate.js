// 邮箱
export function isEmail (s) {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}

// 手机号码
export function isMobile (s) {
  return /^1[3456789]\d{9}$/.test(s)
}

// 电话号码
export function isPhone (s) {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
}

// URL地址
export function isURL (s) {
  return /^http[s]?:\/\/.*/.test(s)
}
