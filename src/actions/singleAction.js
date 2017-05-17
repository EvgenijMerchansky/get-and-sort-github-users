import axios from 'axios';

export const query = (arg) => {
  return function(dispatch){
    const q = arg;
    axios.get(
      `https://api.github.com/search/users?q=${q}`,
    ).then(response => {
      dispatch({
        type: 'DATA',
        payload: response.data.items
      })
    })
  }
}

export const change = (textValue, noFilterUsers) => {

  const change = noFilterUsers.filter((elem, index) => {
    const value = textValue.toLowerCase();
    return ~elem.props.children.toLowerCase().indexOf(value)
  })
  
  return function(dispatch){
    dispatch({
      type: 'CHANGE',
      payload: change,
    })
  }
}
