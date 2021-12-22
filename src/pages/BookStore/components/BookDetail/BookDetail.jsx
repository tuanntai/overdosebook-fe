import React, { useEffect } from "react";
import { Box, Image } from "theme-ui";
import sx from "./sx";
import hoverBook from "../../../../assets/img/hoverBook.png";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import { getBookById } from "../../../../redux/actions/book/book";
import { useParams } from "react-router-dom";
import { bookSelectors } from "../../../../redux/reducers/book/bookReducer";

const BookDetail = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const bookInfo = useAppSelector(bookSelectors.bookByIdSelector);

  useEffect(() => {
    dispatch(getBookById(id));
  }, [id, dispatch]);

  return (
    <>
      <Box sx={sx.wrapper}>
        <Box sx={sx.left}>
          <Box sx={sx.imageBox}>
            <Image src={bookInfo.imageUrl} sx={sx.image} />
          </Box>
        </Box>
        <Box sx={sx.right}>
          <Box sx={sx.nameBox}>
            <Box sx={sx.leftName}>
              <Box sx={sx.title}>{bookInfo.title}</Box>
              <Box sx={sx.author}>{bookInfo.author} (author)</Box>
            </Box>
            <Image src={hoverBook} sx={sx.newBook} />
          </Box>
        </Box>
      </Box>
      <Box sx={sx.secondWrapper}>
        <Box sx={sx.secondLeft}> </Box>
        <Box sx={sx.secondRight}>
          <Box>
            <Box sx={sx.title}>Description</Box>
            <Box sx={sx.author}>By {bookInfo.author}</Box>
          </Box>
          <Box sx={sx.description}>{bookInfo.description}</Box>
        </Box>
      </Box>
    </>
  );
};

export default BookDetail;
