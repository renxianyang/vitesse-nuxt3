export default defineEventHandler(function () {
  const serverTime: string = new Date().toLocaleString()

  return serverTime
})
