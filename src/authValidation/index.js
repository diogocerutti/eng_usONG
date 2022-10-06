export const authValidation = () => {
  const verify = localStorage.getItem('token')
  if (verify) {
    window.location.href = '/'
  }
}

export const Logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('username')
  window.location.href = '/login'
}
