import React, {Component} from 'react'
import UserList from './UserList'

class MovieCard extends Component {
    render() {
        const { users, userswholiked, moviedetails } = this.props;
        return (<li key={moviedetails.id}>
            <h2>{moviedetails.name}</h2>
            <p>Liked By:</p>
            <ul>
              <UserList userswholiked={userswholiked} users={users} />
            </ul>
          </li> 
       )
    }
}

export default MovieCard