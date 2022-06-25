export type User$ = {
  id: undefined | string
  name: string
}

export default defineEventHandler(function () {
  const user: User$ = {
    id: undefined,
    name: 'john',
  }

  return user
})
