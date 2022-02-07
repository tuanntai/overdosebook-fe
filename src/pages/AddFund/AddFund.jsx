import React, { useState } from "react";
import { Box, Button, Checkbox } from "theme-ui";
import { addFundAction } from "../../redux/actions/user/user";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { authSelectors } from "../../redux/reducers/authReducer";
import { sx } from "./style";

function AddFund({ setIsShow, isShow }) {
  const [fund, setFund] = useState(10);
  const [isConfirm, setIsConfirm] = useState(false);
  const dispatch = useAppDispatch();
  const userId = useAppSelector(authSelectors.userIdSelector);

  const handleConfirm = () => {
    if (isConfirm) {
      dispatch(addFundAction({ id: userId, balance: fund }));
      setIsShow(!isShow);
    }
  };

  const handleChangeFund = (fund) => {
    setFund(fund);
  };

  return (
    <Box
      sx={{
        p: "21px",
        width: "500px",
        border: "1px solid #eaeaec",
        borderRadius: "5px",
        background: "#ffffff",
      }}
    >
      <Box sx={{ fontSize: "25px", fontWeight: 700, pb: "20px" }}>
        Add Fund To Wallet
      </Box>
      <Box sx={{ fontSize: "16px", fontWeight: 500, pb: "20px" }}>
        Choose Amount You Want to Add:
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={sx.fundValue}
          className={fund === 10 ? "active" : ""}
          onClick={() => handleChangeFund(10)}
        >
          10 $
        </Box>
        <Box
          sx={sx.fundValue}
          className={fund === 50 ? "active" : ""}
          onClick={() => handleChangeFund(50)}
        >
          50 $
        </Box>
        <Box
          sx={sx.fundValue}
          className={fund === 100 ? "active" : ""}
          onClick={() => handleChangeFund(100)}
        >
          100 $
        </Box>
        <Box
          sx={sx.fundValue}
          className={fund === 200 ? "active" : ""}
          onClick={() => handleChangeFund(200)}
        >
          200 $
        </Box>
      </Box>
      <Box
        sx={{
          py: "20px",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          alignItems: "center",
          cursor: "pointer",
          width: "100%",
        }}
        onClick={() => setIsConfirm(!isConfirm)}
      >
        <Checkbox checked={isConfirm} />
        <Box>Confirm Add Money</Box>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", gap: "20px" }}
      >
        <Button
          disabled={!isConfirm}
          sx={{
            width: "100%",
            background: "#4a4a4a",
            color: "#ffffff",
            cursor: "pointer",
            "&.active": {
              background: "#1d6ef1",
            },
          }}
          className={isConfirm ? "active" : ""}
          onClick={handleConfirm}
        >
          Accept
        </Button>
        <Button
          sx={{
            width: "100%",
            border: "1px solid #d6d5da",
            background: "#ffffff",
            color: "#4b4b4b",
            cursor: "pointer",
          }}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
}

export default AddFund;
