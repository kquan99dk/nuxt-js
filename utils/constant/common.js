export function getBase64 (img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

export function truncPhoneNumber (phone) {
  if (!phone) { return '' }
  let text = phone
  if (phone.startsWith('0')) {
    const prefix = '+84'
    text = `${prefix}${phone.slice(1)}`
  }
  return text
}
