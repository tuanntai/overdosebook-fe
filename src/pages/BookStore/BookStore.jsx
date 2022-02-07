import React, { useEffect, useState } from "react";
import { SVGIcon } from "../../components/SVGIcon/SVGIcon";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Box } from "theme-ui";
import sx from "./sx";
import ExploreBookListContainer from "../../containers/ExploreBookListContainer/ExploreBookListContainer";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getAllBooks } from "../../redux/actions/book/book";
import { DropdownOption } from "../../components/DropdownOption/DropdownOption";
import { saleTypeFilters } from "./constants";
import { bookSelectors } from "../../redux/reducers/book/bookReducer";
import { Pagination } from "../../components/Pagination/Pagination";

const BookStore = () => {
  const dispatch = useAppDispatch();
  const [input, setInput] = useState();
  const [selectedSaleType, setSelectedSaleType] = useState("PRICE_ASC");
  const [pagePagination, setPagePagination] = useState(1);
  const allBooks = useAppSelector(bookSelectors.allBooksSelector);

  useEffect(() => {
    dispatch(getAllBooks(pagePagination - 1));
    console.log(pagePagination);
  }, [dispatch, pagePagination]);

  return (
    <Box sx={sx.wrapper}>
      <Box sx={sx.function}>
        <SearchBar
          inputText={input}
          setSearchKey={setInput}
          placeholder={"What you need ?"}
          icon={<SVGIcon name="circle" style={sx.icon} />}
        />
        <DropdownOption
          options={saleTypeFilters}
          setActiveValue={setSelectedSaleType}
          activeValue={selectedSaleType}
          title="Sale Type"
          icon={<SVGIcon name="saleType" style={{ marginRight: "14px" }} />}
          styles={{ width: "220px" }}
        />
      </Box>
      <ExploreBookListContainer />
      <Pagination
        currentPage={pagePagination}
        totalPages={allBooks.totalPage}
        totalCount={allBooks.totalItem}
        pageSize={8}
        onPageChange={setPagePagination}
      />
    </Box>
  );
};

export default BookStore;
