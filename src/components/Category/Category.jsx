/** @jsxImportSource theme-ui */
import React from "react";
import { Box, Image, Text } from "@theme-ui/components";
import sx from "./sx";
import { Link } from "react-router-dom";

const Category = (props) => {
  const { onItemClick, icon, name, link } = props;
  return (
    <Link to={link} sx={sx.linkCategory} onClick={onItemClick}>
      <Box sx={sx.category}>
        <Image src={icon} sx={sx.image} />
        <Text sx={sx.titleCategory}>{name}</Text>
      </Box>
    </Link>
  );
};

export default Category;
