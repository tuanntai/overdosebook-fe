import React, { useState } from "react";
import { Box, Button } from "theme-ui";
import { useAppSelector } from "../../redux/hook";
import sx from "./sx";

function Header() {
  const [isShowModal, setIsShowModal] = useState(false);
  const currentPage = useAppSelector((root) => root.navigate.currentPage);
  return (
    <Box sx={sx.wrapper}>
      <Box>
        <Box>{currentPage}</Box>
      </Box>
      <Button sx={sx.login} onClick={() => setIsShowModal(true)}>
        Sign in Account
      </Button>
    </Box>
  );
}

export default Header;
