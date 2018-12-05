const namespaces = true

const state = { token: localStorage.getItem('user-token') || '', status: '' }

export default {
  namespaces,
  state
}
