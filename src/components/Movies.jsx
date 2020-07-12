import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/Like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
  };

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

  render() {
    const { movies: allMovies, pageSize, currentPage } = this.state;
    const { length: count } = this.state.movies;
    const movies = paginate(allMovies, currentPage, pageSize);
    if (allMovies.length === 0)
      return <p className="text-center my-3">There is no Movies</p>;
    return (
      <React.Fragment>
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
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          onChangePage={this.handlePageChange}
          currentPage={currentPage}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
