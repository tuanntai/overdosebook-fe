import React from "react";
import { useForm } from "react-hook-form";
import { Box, Button, Divider, Image, Input } from "theme-ui";
import sx from "./sx";
import LogoBook from "../../assets/img/LogoBook.png";
import { useAppDispatch } from "../../redux/hook";
import { postLogin } from "../../redux/actions/auth/auth";

const Login = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(postLogin({ username: data.username, password: data.password }));
  };

  return (
    <Box sx={sx.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Image src={LogoBook} sx={sx.imageLogo} />
        <Box sx={sx.heading}>Connect to your account</Box>
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
          {errors.password && <Box sx={sx.notice}>Password is require !!!</Box>}
        </Box>
        <Box sx={sx.buttonBox}>
          <Button sx={sx.logIn} type="submit">
            Log In
          </Button>
          <Button sx={sx.signUp} type="button">
            Sign Up
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Login;
