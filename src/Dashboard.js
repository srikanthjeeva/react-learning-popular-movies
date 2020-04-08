import React, {Component} from 'react'
import MovieCard from './MovieCard'

class Dashboard extends Component {
    render() {
      const { usermovies, users, movies } = this.props;
      
      const all_movs = Object.keys(movies).map( moviekey => (
        <MovieCard 
        	key={moviekey} 
        	users={users} 
        	userswholiked={usermovies[moviekey]} 
        	moviedetails={movies[moviekey]} /> 
      ))
    		  
       return <ul>{all_movs}</ul>
    }
}

export default Dashboard