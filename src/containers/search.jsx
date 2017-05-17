import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import styles from './search.scss';

import { query } from '../actions/singleAction';

class Search extends React.Component{
  render(){
    const listItem = this.props.queryReducer
    return(
      <div className='item__container'>
        <input ref={(input) => {this.inputValue = input}} placeholder='Search' type='text' id='some'/><button onClick={(e) => this.props.query(this.inputValue.value)} type='button'>Search</button>
        <div>{listItem}</div>
      </div>
    )
  }
}

function officesState(state) {
  return{
    queryReducer: state.queryReducer
  }
}

function MapDispatchToProps(dispatch) {
  return bindActionCreators({
    query
  },dispatch)
}

export default connect(officesState,MapDispatchToProps)(Search)
