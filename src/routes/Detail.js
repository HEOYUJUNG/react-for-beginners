import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  // useParams은 url에서 변수 값을 가져온다!
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <img src={movie.medium_cover_image} alt="coverImg"></img>
          <h2>{movie.title}</h2>
          <div>rating : {movie.rating}</div>
          <div>runtime : {movie.runtime}</div>
          <div>genre : </div>
          <ul>            
            {movie.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Detail;
