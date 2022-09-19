import { FetchPost } from '../../api'

const LoginRoute = async (route, username, password) => {
  const json = await FetchPost(route, {
    username,
    password
  })
  return json
}

export { LoginRoute }
