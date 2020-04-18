import React from 'react'
import {connect} from 'react-redux'
import {mapStateToProps , mapDispatchToprops} from './mapFunctions.js'

class UserContainer extends React.Component{
    constructor(props){
      super(props)
      this.state={
        userList:[]
      }
    }
    componentDidMount() {
        this.props.fetchUsers('https://jsonplaceholder.typicode.com/users').then(data =>{
          this.setState({
            userList:data
          })
        })
    }

    render(){
        console.log("count = "+this.props.userData.count);
        return (
          <div>
            <h2>User List</h2>
            <ul>
                {this.state.userList.map(item => {
                  return <li>{item.name}</li>;
                })}
            </ul>
          </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToprops)(UserContainer)
