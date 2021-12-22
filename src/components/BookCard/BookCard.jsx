import React from "react";
import { Box, Button, Image, Text } from "theme-ui";
import { SVGIcon } from "../SVGIcon/SVGIcon";
import sx from "./sx";

function BookCard({
  name,
  id,
  image,
  price,
  discountPercent,
  author,
  onItemClick,
}) {
  return (
    <Box sx={sx.wrapper} onClick={() => onItemClick(id)}>
      <Box sx={sx.imageBox}>
        <Image src={image} sx={sx.image} />
      </Box>
      <Box sx={sx.contentBox}>
        <Box sx={sx.name}>{name}</Box>
        <Box sx={sx.author}>{author}</Box>
        <Box sx={() => sx.price(discountPercent)}>${price}</Box>
        {discountPercent > 0 && (
          <Box sx={sx.extraPrice}>
            ${((price * (100 - discountPercent)) / 100).toFixed(2)}
          </Box>
        )}
      </Box>
      <Box sx={sx.buttonBox}>
        <Button sx={sx.button}>
          <SVGIcon name="cart" style={sx.cart} />
          <Text>Add To Card</Text>
        </Button>
      </Box>
    </Box>
  );
}

export default BookCard;
