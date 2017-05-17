import React from 'react';

import CommonPage from './components/common.jsx';
import Search from './containers/search.jsx';
import VideoPage from './containers/video.jsx';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Routes = () => {
  return(
    <div>
      <Router>
        <div>
          <Route exact path='/' component={CommonPage}/>
          <Route path='/search' component={Search}/>
          <Route path='/video-list/video' component={VideoPage}/>
        </div>
      </Router>
    </div>
  )
}

export default Routes
