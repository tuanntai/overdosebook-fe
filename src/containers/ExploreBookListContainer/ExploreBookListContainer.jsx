import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "theme-ui";
import BookCardList from "../../components/BookCardList/BookCardList";
import { useAppSelector } from "../../redux/hook";
import { bookSelectors } from "../../redux/reducers/book/bookReducer";
import sx from "./sx";

const ExploreBookListContainer = () => {
  const bookList = useAppSelector(bookSelectors.bookListSelector);
  const navigate = useNavigate();
  const handleItemClick = (id) => {
    navigate(`${id}`);
  };
  return (
    <Box sx={sx.wrapper}>
      <Box sx={sx.title}>All Books</Box>
      <Box sx={sx.result}>
        {bookList.length} {bookList.length > 1 ? `results` : `result`}
      </Box>
      <BookCardList list={bookList} onItemClick={handleItemClick} />
    </Box>
  );
};

export default ExploreBookListContainer;
