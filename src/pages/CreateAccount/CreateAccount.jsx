import React from "react";
import { useForm } from "react-hook-form";
import { Box, Button, Divider, Image, Input } from "theme-ui";
import { postUser } from "../../redux/actions/auth/auth";
import { useAppDispatch } from "../../redux/hook";
import sx from "./styles";
import Logo from "../../assets/img/logo.png";

function CreateAccount() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(postUser({ username: data.username, password: data.password }));
  };
  return (
    <Box sx={sx.createAccountWrapper}>
      <Box sx={sx.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Image src={Logo} sx={sx.imageLogo} />
          <Box sx={sx.heading}>Create An Account</Box>
          <Box sx={sx.inputContainer}>
            <Input
              sx={sx.input}
              placeholder="Username"
              {...register("username")}
            />
            <Divider sx={sx.divider} />
          </Box>
          <Box sx={sx.inputContainer}>
            <Input
              sx={sx.input}
              placeholder="Password"
              type="password"
              {...register("password", { required: true })}
            />
            <Divider sx={sx.divider} />
            {errors.password && (
              <Box sx={sx.notice}>Password is require !!!</Box>
            )}
          </Box>
          <Box sx={sx.buttonBox}>
            <Button sx={sx.logIn} type="submit">
              Sign Up
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default CreateAccount;
