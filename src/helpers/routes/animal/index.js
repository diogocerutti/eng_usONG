import { FetchPost } from '../../api'

const addAnimal = async (
  route,
  nickname,
  specie_id,
  breed_id,
  image,
  description,
  outgoing
) => {
  const json = await FetchPost(route, {
    nickname,
    specie_id,
    breed_id,
    image,
    description,
    outgoing
  })
  return json
}

export default addAnimal
