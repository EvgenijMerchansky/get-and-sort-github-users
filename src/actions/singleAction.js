import axios from 'axios';
// import React from 'react';
// import { BrowserRouter as Link } from 'react-router-dom';

// import styles from './singleAction.scss';


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

export const change = (textValue, users) => {
  return function(dispatch){
    const value = textValue.toLowerCase();
    // console.log(value);
    const change = users.filter((elem, index) => {
      // console.log(elem.login)
      return ~elem.login.toLowerCase().indexOf(textValue)
    })
    dispatch({
      type: 'CHANGE',
      payload: change,
    })
  }
}
