import React from 'react'
import {connect} from 'react-redux'
// import { fetchUsers } from '../redux'
import {mapStateToProps , mapDispatchToprops} from './mapFunctions.js'

// const mapStateToProps = state =>{
//     return {
//         userData: state.user
//     }
// }
//
// const mapDispatchToprops = dispatch =>{
//     return {
//         fetchUsers: (url) => dispatch(fetchUsers(url))
//     }
// }

class TodoContainer extends React.Component{
    constructor(props){
      super(props)
      this.state={
        todoList:[]
      }
    }
    componentDidMount() {
        this.props.fetchUsers('https://jsonplaceholder.typicode.com/todos').then(data =>{
          this.setState({
            todoList:data
          })
        })
    }

    render(){
        return (
          <div>
            <h2>ToDo List</h2>
            <ul>
                {this.state.todoList.map(item => {
                  return <li>{item.title}</li>;
                })}
            </ul>
          </div>
        )
        // if(!this.props.userData.loading){
        //   console.log("length = "+this.props.userData.users.length)
        // }
        // if(this.props.userData.loading){
        //     return (<h2>Loading...</h2>)
        //
        // }
        // else if(this.props.userData.error){
        //      return (<h2>{this.props.userData.error}</h2>)
        // }
        // return(
        //     <div>
        //         <h2>User List</h2>
        //         <p>
        //             {this.props.userData.users.map(user => {
        //               <h1> {user.name}</h1>
        //             })}
        //         </p>
        //     </div>
        // )
    }
}

export default connect(mapStateToProps,mapDispatchToprops)(TodoContainer)
