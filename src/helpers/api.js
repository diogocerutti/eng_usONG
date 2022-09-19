const BASE = 'http://localhost:8080'

export async function FetchGet(route) {
  const res = await fetch(`${BASE + route}`)
  const json = await res.json()

  return json
}

export const FetchPost = async (route, body) => {
  const res = await fetch(BASE + route, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  const json = await res.json()
  return json
}

export const api = {
  getAll: async (route) => {
    const json = await FetchGet(route)
    return json
  }
}
