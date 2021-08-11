// in action we define what to do
// in reducers, we tell how to perform that actions

const changeNumber = (state = initialState, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1
    case 'DEC':
      return state - 1
    default:
      return state
  }
}
export default changeNumber
