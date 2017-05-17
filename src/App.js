import React, { Component } from 'react';
import { query, change } from './actions/singleAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends Component{
  render(){
    // console.log(this);
    const users = this.props.queryReducer;
    const filtered = this.props.queryReducer2;

      const noFilterUsers = users.map((elem, index) => {
        return (
          <li key={index}>{elem.login}</li>
        )
      })

      const filteredUsers = filtered.map((elem, index) => {
        return (
          <li key={index}>{elem}</li>
        )
      })

    return(
      <div>
        <input ref={(input) => {this.inputValue = input}}/>
        <button onClick={() => {this.props.query(this.inputValue.value)}}>get!</button>
        <h5>search</h5><input ref={(input) => {this.inputSearch = input}} onChange={() => {this.props.change(this.inputSearch.value, noFilterUsers)}}/>
        <ul>{filteredUsers.length > 0 ? filteredUsers : noFilterUsers}</ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    queryReducer: state.info,
    queryReducer2: state.filtered
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    query,
    change
  },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
