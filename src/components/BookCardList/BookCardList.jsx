import React from "react";
import { Box } from "theme-ui";
import BookCard from "../BookCard/BookCard";
import sx from "./sx";

function BookCardList({ list, onItemClick }) {
  return (
    <Box sx={sx.wrapper}>
      {list &&
        list.map((item) => (
          <Box sx={sx.item} key={item.id}>
            <BookCard
              name={item.title}
              id={item.id}
              image={item.imageUrl}
              price={item.price}
              discountPercent={item.discountPercent}
              author={item.author}
              onItemClick={onItemClick}
            />
          </Box>
        ))}
    </Box>
  );
}

export default BookCardList;
