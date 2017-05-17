const initialState = {
  start: false,
  end: false,
  info: [],
  error: false,
  filtered: []
}

export default function (state=initialState, action){
  switch (action.type) {
    case 'DATA':
      return Object.assign({}, state, {start: true, end: false, error: false, info: action.payload});
    // for search action
    case 'CHANGE':
      return Object.assign({}, state, {start: true, end: false, error: false, filtered: action.payload});
    default:
      return state;
  }
}
