import React, { Component } from "react";
import Like from "./common/Like";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import { getMovies } from "../services/fakeMovieService";
import { paginate } from "../utils/paginate";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    selectedGenre: "All Movies",
    pageSize: 4,
    currentPage: 1,
  };

  componentDidMount() {
    const genres = [{ name: "All Movies" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDeleteMovie = (movie) => {
    const movies = this.state.movies.filter((mov) => mov._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    let index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  render() {
    const {
      movies: allMovies,
      pageSize,
      currentPage,
      genres,
      selectedGenre,
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const movies = paginate(filtered, currentPage, pageSize);

    if (allMovies.length === 0)
      return <p className="text-center my-3">There is no Movies</p>;

    return (
      <div className="row">
        {/* filter part */}
        <div className="col-2">
          <ListGroup
            items={genres}
            selectedGenre={selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p className="text-center">
            There is {filtered.length} movies in Database
          </p>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">type</th>
                <th scope="col">rate</th>
                <th scope="col">Stock</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>{movie.numberInStock}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onClick={() => {
                        this.handleLike(movie);
                      }}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleDeleteMovie(movie);
                      }}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* pagination part */}
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            onChangePage={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
