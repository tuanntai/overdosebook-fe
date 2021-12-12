import React from "react";
import sx from "./sx";
import Category from "../Category/Category";
import { Box } from "@theme-ui/components";

const CategoriesList = (props) => {
  const { items, onItemClick } = props;

  return (
    <Box sx={sx.list}>
      {items &&
        items.map((item, index) => (
          <Category
            key={index}
            onItemClick={onItemClick}
            link={item.link}
            icon={item.icon}
            name={item.name}
          />
        ))}
    </Box>
  );
};

export default CategoriesList;
