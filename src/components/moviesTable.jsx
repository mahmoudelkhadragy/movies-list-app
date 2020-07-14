import React from 'react';
import Like from "./common/Like";

const MoviesTable = (props) => {
    const { movies, onLike, onDelete, onSort } = props;

    return (
        <table className="table">
            <thead>
                <tr>
                    <th onClick={() => onSort('title')} scope="col">Name</th>
                    <th onClick={() => onSort('genre.name')} scope="col">type</th>
                    <th onClick={() => onSort('numberInStock')} scope="col">rate</th>
                    <th onClick={() => onSort('dailyRentalRate')} scope="col">Stock</th>
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
                                    onLike(movie);
                                }}
                            />
                        </td>
                        <td>
                            <button
                                onClick={() => {
                                    onDelete(movie);
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
    );
}

export default MoviesTable;