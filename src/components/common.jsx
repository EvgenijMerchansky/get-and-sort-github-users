import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

// import styles from './common.scss';

class CommonPage extends React.Component {
  render(){
    return(
      <div>
        <p className="App-intro">
           {/* <p><Link to="/">Home</Link></p>
           <p><Link to="/search">Contact</Link></p>
           <p><Link to="/video-list/video">Not Exist</Link></p> */}
        </p>
      </div>
    )
  }
}

export default CommonPage
