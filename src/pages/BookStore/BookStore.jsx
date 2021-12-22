import React, { useEffect, useState } from "react";
import { SVGIcon } from "../../components/SVGIcon/SVGIcon";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Box } from "theme-ui";
import sx from "./sx";
import ExploreBookListContainer from "../../containers/ExploreBookListContainer/ExploreBookListContainer";
import { useAppDispatch } from "../../redux/hook";
import { getBookList } from "../../redux/actions/book/book";

const BookStore = () => {
  const dispatch = useAppDispatch();
  const [input, setInput] = useState();

  useEffect(() => {
    dispatch(getBookList());
  }, [dispatch]);

  return (
    <Box sx={sx.wrapper}>
      <SearchBar
        inputText={input}
        setSearchKey={setInput}
        placeholder={"What you need ?"}
        icon={<SVGIcon name="circle" style={sx.icon} />}
      />
      <ExploreBookListContainer />
    </Box>
  );
};

export default BookStore;
