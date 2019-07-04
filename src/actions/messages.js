export const EVENT = 'EVENT'

export function onEvent (event) {
  const { data } = event
  const messages = JSON.parse(data)

  return {
    type: EVENT,
    payload: messages
  }
}
