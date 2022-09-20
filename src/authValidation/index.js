export const authValidation = () => {
  const verify = localStorage.getItem('token')
  if (verify) {
    window.location.href = '/'
  }
}

export const Logout = () => {
  const logout = localStorage.removeItem('token')
}
