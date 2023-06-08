import { PropTypes } from "prop-types";
import {Link} from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt="coverImg"></img>
      <h2>(새로고침)<a href="/movie">{title}</a></h2>  {/* 브라우저 새로고침 */}
      <h2>(새로고침X)<Link to= {`/movie/${id}`}>{title}</Link></h2>  {/* 브라우저 새로고침 X */}
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id : PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
