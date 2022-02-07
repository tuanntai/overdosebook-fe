import React, { useEffect, useState } from "react";
import { Box, Image } from "theme-ui";
import sx from "./sx";
import hoverBook from "../../../../assets/img/hoverBook.png";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import { buyBook, getBookById } from "../../../../redux/actions/book/book";
import { useParams } from "react-router-dom";
import { bookSelectors } from "../../../../redux/reducers/book/bookReducer";
import DOMPurify from "dompurify";
import Plus from "../../../../assets/img/plus.png";
import Minus from "../../../../assets/img/minus.png";
import { authSelectors } from "../../../../redux/reducers/authReducer";

const BookDetail = () => {
  const { id } = useParams();
  const authToken = useAppSelector(authSelectors.getTokenSelector);
  const dispatch = useAppDispatch();
  const bookInfo = useAppSelector(bookSelectors.bookByIdSelector);
  const userId = useAppSelector(authSelectors.userIdSelector);
  const [amount, setAmount] = useState(1);
  useEffect(() => {
    dispatch(getBookById(id));
  }, [id, dispatch]);

  const handleAmount = (isAdd) => {
    if (isAdd) {
      setAmount(amount + 1);
    } else {
      if (amount !== 0) setAmount(amount - 1);
    }
  };

  const handleBuyBook = () => {
    dispatch(buyBook({ userId: userId, bookId: Number(id), amount: amount }));
  };

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
          <Box>{`amount: ${bookInfo.amount}`}</Box>
          <Box sx={sx.option}>
            <Box sx={sx.optionBox}>
              <img
                src={Minus}
                alt="Minus"
                onClick={() => handleAmount(false)}
              />
              <Box sx={amount}>{amount}</Box>
              <img src={Plus} alt="Plus" onClick={() => handleAmount(true)} />
            </Box>
            <Box sx={sx.buyButton} onClick={authToken ? handleBuyBook : ""}>
              {authToken ? "Buy Now" : "You Need To Login First"}
            </Box>
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
          <Box
            sx={sx.description}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(bookInfo.description),
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default BookDetail;
