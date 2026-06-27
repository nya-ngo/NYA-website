'use server'

export async function createPost(prevState, formData) {
  const title = formData.get('title')
  const content = formData.get('content')

  const res = await fetch('https://api.vercel.app/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      content,
    }),
  })

  const json = await res.json()

  if (!res.ok) {
    return { message: 'Failed to create post' }
  }

  return {
    message: 'Post created successfully',
    data: json,
  }
}