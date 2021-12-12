import React, { useState } from "react";
import { Box, Button } from "theme-ui";
import sx from "./sx";

function Header() {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <Box sx={sx.wrapper}>
      <Box></Box>
      <Button sx={sx.login} onClick={() => setIsShowModal(true)}>
      Sign in Account
      </Button>
    </Box>
  );
}

export default Header;
