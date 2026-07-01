import { notFound } from 'next/navigation'

async function fetchUser() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1')

    if (!res.ok) return undefined

    return res.json()
  } catch (error) {
    return undefined
  }
}

export default async function Profile() {
  const user = await fetchUser()

  if (!user) {
    notFound()
  }

  return <h1>{user.name}</h1>
}