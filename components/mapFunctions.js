import { fetchUsers } from '../redux'

export const mapStateToProps = state =>{
    return {
        userData: state.user
    }
}
export const mapDispatchToprops = dispatch =>{
    return {
        fetchUsers: (url) => dispatch(fetchUsers(url))
    }
}
