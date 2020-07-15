import React, { Component } from "react";
import Table from "./common/table";
import Like from "./common/Like";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Type" },
    { path: "dailyRentalRate", label: "Rate" },
    { path: "numberInStock", label: "Stock" },
    {
      key: "like",
      content: (movie) => (
        <Like
          liked={movie.liked}
          onClick={() => {
            this.props.onLike(movie);
          }}
        />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => {
            this.props.onDelete(movie);
          }}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { movies, onLike, onDelete, sortColumn, onSort } = this.props;
    return (
      <Table
        columns={this.columns}
        data={movies}
        onLike={onLike}
        onDelete={onDelete}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
