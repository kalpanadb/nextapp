"use client";
import React from "react";
import { Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { SignButton, StyledBox } from "./Signin.styled";
import { UseAddSignUp } from "@/hooks/useSign";
import FormInput from "@/ui-component/form/UpForm";
import FormCheckbox from "@/ui-component/form/checkbox";

type FormValues = {
  name: string;
  email: string;
  password: string;
  phoneNumber: Number;
  checkbox: boolean;
};
const SignupForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phoneNumber: "",
      checkbox: false,
    },
  });

  const { register, handleSubmit, formState, control } = form;
  const { errors } = formState;

  const { mutate: newData } = UseAddSignUp();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    newData(data);
    console.log(newData);
    alert("submit");
    form.reset();
  };

  return (
    <>
    <StyledBox>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={2} width={400} justifyContent={"center"}>
          <Typography variant="h5" fontWeight="bold">
            Create an account
          </Typography>
          <label>Name</label>
          <FormInput
            type="text"
            control={control}
            {...register("name", { required: "Name is requied" })}
            errorText={errors.name?.message}

          />
          <label>Email</label>
          <FormInput
            type="email"
            control={control}
            {...register("email", {
              required: "Email is requied",
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invaild Email",
              },
            })}
            errorText={errors.email?.message}
          />
          <label>Password</label>
          <FormInput
            control={control}
            {...register("password", {
              required: "Password is requied", minLength: {
                value: 4,
                message: "Minimum 4 characters"
              }
            })}
            errorText={errors.password?.message}
          />
          <label>PhoneNumber</label>
          <FormInput
            type="number"
            control={control}
            {...register("phoneNumber", { required: "PhoneNumber is requied" })}
            errorText={errors.phoneNumber?.message}
          />
          <FormCheckbox
            name="checkbox"
            label="Accept terms and Conditions"
            control={control}
            rules={{
              required: {
                value: true,
                message: 'please accept terms and conditions'
              }
            }}
            errorText={errors?.checkbox?.message}
          />
          <SignButton type="submit" variant="contained">
            Sign Up
          </SignButton>
        </Stack>
      </form>
      <DevTool control={control} />
      </StyledBox>
    </>
  );
};

export default SignupForm;