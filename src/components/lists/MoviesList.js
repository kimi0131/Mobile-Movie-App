import { FlatList } from 'react-native'
import MovieTVCard from '../listItems/MovieTvCard'
import { IMG } from '../../config/apiConfig'

const MoviesList = props => {
  const { navigation, movies, type } = props
  // console.log('type of movie list', type)

  function getTypeReleaseDate(item, type) {
    if (type === "movie") {
      return item.release_date;
    } else if (type === "tv") {
      return item.first_air_date;
    } else if (type === undefined && item.known_for) {
      type = "person"
      return item.known_for.release_date || item.known_for.first_air_date || "";
    } 
  }

  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <MovieTVCard
          id={item.id}
          title={type === "movie" ? item.title : item.name}
          releasedate={getTypeReleaseDate(item, type)}
          source={type !== "person" ? `${IMG}${item.poster_path}` : `${IMG}${item.profile_path}`}
          popularity={item.popularity}
          navigation={navigation}
          type={!type ? item.media_type : type }
        />
      )}
    />
  )
}

export default MoviesList