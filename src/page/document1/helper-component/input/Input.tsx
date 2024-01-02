"use client"
import UpInput from "@/ui-component/upInput/UpInput";

const Input=()=>{
    
    const handleInputChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value);
    };
    return(
        <>
        <UpInput
        label="Username"
        id="input"
        placeholder="username"
        fullWidth
        variant="outlined"
        type="text"
        onInputHandler={handleInputChange}/>
        </>
    );
};
export default Input;