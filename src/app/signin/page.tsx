"use client"
import FormInput from "@/ui-component/form/UpForm";
import { Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { SignButton, StyleBox } from "../signup/Signin.styled";
import { UseSignIn } from "@/hooks/useSign";

type SignInProps = {
    email: string;
    password: string;
}
const SignInForm = () => {
    const from = useForm<SignInProps>({
        defaultValues: {
            email: '',
            password: ""
        },
    });
    const { register, handleSubmit, formState, control } = from;
    const { errors } = formState;

    const { mutate } = UseSignIn();


    const onSubmit = (data: SignInProps) => {
        mutate(data);
        console.log(data, "sign in");
        alert("submit the signin form");
    };

    return (
        <>
           
              
                <StyleBox>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <h1>Sign in</h1>
                    <Stack spacing={2} width={400} justifyContent={"center"}>
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
                            errorText={errors?.email?.message}
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
                            errorText={errors?.password?.message}
                        />
                        <SignButton type="submit" variant="contained">
                            Login
                        </SignButton>
                    </Stack>
                </form>
            </StyleBox>
        </>
    );
}
export default SignInForm;

