import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "theme-ui";
import AddFund from "../../pages/AddFund/AddFund";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { authSelectors, logout } from "../../redux/reducers/authReducer";
import { userSelectors } from "../../redux/reducers/user/userReducer";
import Login from "../Login/Login";
import { Modal } from "../Modal/Modal";

import sx from "./sx";

function Header() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowAddFundModal, setIsShowAddFundModal] = useState(false);
  const currentPage = useAppSelector((root) => root.navigate.currentPage);
  const accessToken = useAppSelector(authSelectors.getTokenSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userInfo = useAppSelector(userSelectors.getUserInfoSelector);

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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontSize: "11px",
            fontWeight: 600,
            "& div": {
              padding: "10px",
              border: "1px solid #eaeaec",
              borderRadius: "5px",
            },
          }}
        >
          <Box
            sx={sx.addFund}
            onClick={() => setIsShowAddFundModal(!isShowAddFundModal)}
          >
            Add Fund
          </Box>
          <Box>user: {userInfo.username}</Box>
          <Box>balance: {userInfo.balance} $</Box>
          <Button sx={sx.create} onClick={handleLogout}>
            Log Out
          </Button>
        </Box>
      ) : (
        <Box sx={sx.buttonBox}>
          <Button sx={sx.create} onClick={() => navigate("account/create")}>
            Create Account
          </Button>
          <Button sx={sx.login} onClick={() => setIsShowModal(true)}>
            Sign in
          </Button>
        </Box>
      )}

      {!accessToken && (
        <Modal showModal={isShowModal} setShowModal={setIsShowModal}>
          <Login />
        </Modal>
      )}

      <Modal
        showModal={isShowAddFundModal}
        setShowModal={setIsShowAddFundModal}
      >
        <AddFund
          setIsShow={setIsShowAddFundModal}
          isShow={isShowAddFundModal}
        />
      </Modal>
    </Box>
  );
}

export default Header;
