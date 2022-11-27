// import React from 'react';
// import Stories from './Components/Big_stories/Stories';
// import Footer from './Components/Footer/Footer';
// import Social from './Components/Social_Media/Social';
// import {connect} from 'react-redux';
// import { IncAction} from './actions';
// import { DecAction } from './actions';
// const App = ({local_varaiabble,IncAction,DecAction}) => {
//   return (
//     <div>
 
//    <Social/>
//    <Stories/>
//    <Footer/>

//    <center>
//     <h1>{local_varaiabble}</h1><br/>
//     <button onClick={ () =>IncAction(5)}>INCREMENT</button>
//     <button onClick={DecAction}>DECREMENT</button>
//    </center>
//     </div>
//   )
// }
// const mapStateToProps = state =>({
//  local_varaiabble : state
// })

// export default connect(mapStateToProps,{IncAction,DecAction})(App);

import React from 'react'
import Stories from './Components/Big_stories/Stories';
import Footer from './Components/Footer/Footer';
import Latest from './Components/latest/Latest';
import Social from './Components/Social_Media/Social';
import Work from './Components/work/Work';
const App = () => {
  return (
    <div>
      <Work/>
      <Latest/>
      <Social/>
      <Stories/>
      <Footer/>
    </div>
  )
}

export default App