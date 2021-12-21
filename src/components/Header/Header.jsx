import React, { useEffect, useState } from "react";
import { Box, Button } from "theme-ui";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { authSelectors, logout } from "../../redux/reducers/authReducer";
import Login from "../Login/Login";
import { Modal } from "../Modal/Modal";
import sx from "./sx";

function Header() {
  const [isShowModal, setIsShowModal] = useState(false);
  const currentPage = useAppSelector((root) => root.navigate.currentPage);
  const accessToken = useAppSelector(authSelectors.getTokenSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (accessToken) {
      setIsShowModal(false);
    }
  }, [accessToken]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Box sx={sx.wrapper}>
      <Box>
        <Box>{currentPage}</Box>
      </Box>
      {accessToken ? (
        <Box>
          Admin <Button onClick={handleLogout}>Log Out</Button>
        </Box>
      ) : (
        <Button sx={sx.login} onClick={() => setIsShowModal(true)}>
          Sign in Account
        </Button>
      )}

      {!accessToken && (
        <Modal showModal={isShowModal} setShowModal={setIsShowModal}>
          <Login />
        </Modal>
      )}
    </Box>
  );
}

export default Header;
