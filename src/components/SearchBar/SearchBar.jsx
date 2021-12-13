import React from "react";
import { Box, Flex, Input } from "theme-ui";
import sx from "./sx";

const SearchBar = ({ inputText, icon, styles, placeholder, setSearchKey }) => {
  const onKeyUpHandler = (e) => {
    if (e.key === "Enter") {
      setSearchKey(inputText);
    }
  };
  const inputChangeHandler = (e) => {
    if (e.currentTarget.value.trim().length === 0)
      setSearchKey(e.currentTarget.value.trim());
  };
  return (
    <Flex sx={sx.container}>
      <Box sx={sx.box}>
        {icon && icon}

        <Input
          sx={sx.input}
          value={inputText}
          onKeyUp={onKeyUpHandler}
          onChange={inputChangeHandler}
          placeholder={placeholder}
        />
      </Box>
    </Flex>
  );
};

export default SearchBar;
