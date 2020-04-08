import React, {Component} from 'react'

class UserList extends Component {
    render() { 
     	const {userswholiked, users} = this.props;
      	if (userswholiked && userswholiked.length > 0) {
          const userlist = userswholiked.map( userid => 
    		<li key={userid}>{users[userid].name}</li>
          )
         return userlist 
        }
      	else {
        	return <p>None of the current users liked this movie</p>
        }
    }
}

export default UserList;