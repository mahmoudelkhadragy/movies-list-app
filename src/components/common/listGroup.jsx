import React from "react";

const ListGrooup = (props) => {
  const {
    items,
    valueProperty,
    textProperty,
    onItemSelect,
    selectedGenre,
  } = props;

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          onClick={() => {
            onItemSelect(item);
          }}
          className={
            item === selectedGenre
              ? "list-group-item active"
              : "list-group-item"
          }
          style={{ cursor: "pointer" }}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGrooup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGrooup;
