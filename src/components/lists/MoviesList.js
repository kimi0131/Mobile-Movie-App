import { FlatList } from 'react-native'
import MovieTVCard from '../listItems/MovieTvCard'
import { IMG } from '../../config/apiConfig'

const MoviesList = props => {
  const { navigation, movies, type } = props
  console.log('type of movie list', type)

  // function getTypeReleaseDate(item, type) {
  //   if (type === "movie") {
  //     return item.release_date;
  //   } else if (type === "tv") {
  //     return item.first_air_date;
  //   } else if (type === "multi") {
  //     type = "person"
  //     return item.known_for.release_date || item.known_for.first_air_date || "";
  //   } 
  // }

  // const options = {
  //   option1: 'movie',
  //   option2: 'tv',
  //   option3: 'person'
  // }

  function getIds(item, type) {
    if (type === 'multi' && item.media_type === 'person') {
      return item.known_for.id
    } else {
      return item.id
    }
  }

  function getTitles(item, type) {
    if (type === 'movie' || item.media_type === 'movie') {
      return item.title
    } else {
      return item.name
    }
  }

  function getPosters(item, type) {
    if (type === 'multi' && item.media_type ==="person") {
      return `${IMG}${item.profile_path}`
    } else {
      return `${IMG}${item.poster_path}`
    }
  }

  function getReleaseDates(item, type) {
    if (type === 'multi' && item.media_type ==="person"&& item.media_type.media_type === 'movie' ) {
      return item.known_for.release_date
    } else if (type === 'multi' && item.media_type ==="person"&& item.media_type.media_type === 'tv')  {
      return item.known_for.first_air_date
    } else if ( type === 'tv' || item.media_type === 'tv' ) {
      return item.first_air_date
    } else {
      item.release_date
    } 
  }

  // function getTypeReleaseDate(item, type) {
  //   if (type === "multi") {
        
 
  //   }
  // }

  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <MovieTVCard
          id={getIds(item, type)}
          title={getTitles(item, type)}
          popularity={item.popularity}
          source={getPosters(item, type)}
          releasedate={getReleaseDates(item, type)}
          navigation={navigation}
          type={item.media_type ? item.media_type : type }
        />
      )}
    />
  )
}

export default MoviesList