import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const MovieControls = ({ movie, type }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <FontAwesomeIcon icon={faEye} />
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
            <FontAwesomeIcon icon={faEyeSlash} />
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeFromWatched(movie.id)}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
