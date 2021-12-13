import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "theme-ui";
import BookCardList from "../../components/BookCardList/BookCardList";
import { EXPLORE_BOOK_LIST } from "./data";
import sx from "./sx";

const ExploreBookListContainer = () => {
  const navigate = useNavigate();
  const handleItemClick = (id) => {
    navigate(`${id}`);
  };
  return (
    <Box sx={sx.wrapper}>
      <Box sx={sx.title}>All Books</Box>
      <Box sx={sx.result}>
        {EXPLORE_BOOK_LIST.length}{" "}
        {EXPLORE_BOOK_LIST.length > 1 ? `results` : `result`}
      </Box>
      <BookCardList list={EXPLORE_BOOK_LIST} onItemClick={handleItemClick} />
    </Box>
  );
};

export default ExploreBookListContainer;
