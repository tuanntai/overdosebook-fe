import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "theme-ui";
import BookCardList from "../../components/BookCardList/BookCardList";
import { useAppSelector } from "../../redux/hook";
import {
  bookSelectors,
  setBookId,
} from "../../redux/reducers/book/bookReducer";
import sx from "./sx";

const ExploreBookListContainer = () => {
  const allBooks = useAppSelector(bookSelectors.allBooksSelector);
  const navigate = useNavigate();
  const handleItemClick = (id) => {
    navigate(`${id}`);
    setBookId(id);
  };
  return (
    <Box sx={sx.wrapper}>
      <Box sx={sx.title}>All Books</Box>
      <Box sx={sx.result}>
        {allBooks.data.length} {allBooks.data.length > 1 ? `results` : `result`}
      </Box>
      <BookCardList list={allBooks.data} onItemClick={handleItemClick} />
    </Box>
  );
};

export default ExploreBookListContainer;
