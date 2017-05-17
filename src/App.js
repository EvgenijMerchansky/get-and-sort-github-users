import React, { Component } from 'react';
import './App.css';

import { query, change } from './actions/singleAction';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import CommonPage from './components/common.jsx';
// import Search from './containers/search.jsx';
// import VideoPage from './containers/video.jsx';

// import Routes from './routes';

class App extends Component{
  render(){
    console.log(this);
    // const sortUsers = this.props.queryReducer.filtered;
    const users = this.props.queryReducer;
    const filtered = this.props.queryReducer2;
      // console.log(filtered);

      const noFilterUsers = users.map((elem, index) => {
        // console.log(elem.login);
        return (
          <li key={index}>{elem.login}</li>
        )
      })
      console.log(noFilterUsers, 'this is NOOO filtered users');
      // console.log(noFilterUsers);
      const filteredUsers = filtered.map((elem, index) => {

        return (
          <li key={index}>{elem.login}</li>
        )
      })
      console.log(filteredUsers, 'this is filtered users');
    // this.usersForSorted = this.props.queryReducer;
    // const individualUser = users.map((elem, index) => {
    //   return (
    //     <div key={index}>{elem.login}<br/><img src={elem.avatar_url}/><br/>id: {elem.id}<br/>Link to profile: <a href={elem.html_url}>{elem.html_url}</a><br/></div>
    //   )
    // })
    return(
      <div>
        <input ref={(input) => {this.inputValue = input}}/>
        <button onClick={() => {this.props.query(this.inputValue.value)}}>get!</button>
        <h5>search</h5><input ref={(input) => {this.inputSearch = input}} onChange={() => {this.props.change(this.inputSearch.value, users)}}/>
        <ul>{filteredUsers}</ul>
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
