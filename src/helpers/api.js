const BASE = 'http://localhost:8080'

async function FetchGet(route) {
  const res = await fetch(`${BASE + route}`)
  const json = await res.json()

  return json
}

export const api = {
  getAll: async (route) => {
    const json = await FetchGet(route)
    return json
  }
}
