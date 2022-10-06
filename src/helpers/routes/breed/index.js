import { FetchPost } from '../../api'

const CreateBreed = async (route, name, description) => {
  const json = await FetchPost(route, {
    name,
    description
  })
  return json
}

export { CreateBreed }
