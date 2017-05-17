import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Link } from 'react-router-dom';

// import styles from './video.scss';

class VideoPage extends React.Component{
  render(){
    // const listItem = this.props.RegionCenterReducer
    // const wrappedItem = listItem.map((elem,index) => {
    //   const elemId = elem.props.children[1].props.to.substr(19,12);
    //   const location = this.props.location.pathname.substr(19,12);
    //
    //   if(location === elemId){
    //     return(
    //       <div key={index}>
    //         <iframe type="text/html" width="640" height="360" src={`http://www.youtube.com/embed/${elemId}`} frameBorder="0" allowFullScreen/>
    //       </div>
    //     )
    //   }
    // })
    return(
      <div className='video'>
        {/* <div className='video__container'>{wrappedItem}</div> */}
        <a>MY TEST LINK</a>
        {/* <Link className='video__button' to="/search">Back to search</Link> */}
      </div>
    )
  }
}

function officesState(state) {
  return{
    RegionCenterReducer: state.queryReducer
  }
}

export default connect(officesState)(VideoPage)
