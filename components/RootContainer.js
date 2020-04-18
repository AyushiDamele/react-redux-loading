import React from 'react'
import {connect} from 'react-redux'
import {mapStateToProps , mapDispatchToprops} from './mapFunctions.js'
import UserContainer from './UserContainer'
import TodoContainer from './TodoContainer'

class RootContainer extends React.Component{
  render(){
    if(this.props.userData.count===0){
      return (
        <div>
          <UserContainer/>
          <TodoContainer/>
        </div>
      );
    }else{
      return(
        <h2> Loading... </h2>
      )
    }

  }
}

export default connect(mapStateToProps,mapDispatchToprops)(RootContainer)
