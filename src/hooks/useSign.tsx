"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

import { useMutation } from "react-query";

const addSignUp = (udata: any) => {
    return axios.post('http://localhost:4000/signup', udata);

};
export const UseAddSignUp = () => {
    return useMutation(addSignUp);
};

const signIn = async (payload: any) => {
    const response = await axios.get('http://localhost:4000/signup', payload);

    if (response.status === 200) {
        const userData = response.data;
        return Array.isArray(userData) ? userData : [];
    } else {
        alert("Error: " + response.statusText);
        return [];
    }
}

export const UseSignIn = () => {
    const router=useRouter();
    const { mutate } = useMutation(signIn, {
        onSuccess: (users, payload) => {
            try {
                const user = users.find((u) => u.email === payload.email && u.password === payload.password);
                if (user) {
                    console.log(payload, "sign in");
                    router.push("/dashboard");
                    alert('Login successful!');
                } else {
                    alert('Invalid email or password');
                }
            } catch (error) {
                console.error('Error during login:', error);
                alert('An error occurred during login');
            }
        },
    });

    return {mutate};
};










