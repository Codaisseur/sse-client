import { EVENT } from '../actions/messages'

export default function (
  state = [],
  { type, payload }
) {
  switch (type) {
    case EVENT:
      return payload
    default:
      return state
  }
}
