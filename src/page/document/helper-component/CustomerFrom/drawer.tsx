import FormInput from "@/ui-component/form/UpForm";
import UpButton from "@/ui-component/upButton/UpButton";
import { FormContentWrapper, FormWrapper } from "../../Document.styled";

const FormDrawer = ({ control, SubmitButton }: any) => {

    return (
        <>
        <FormWrapper>
            <label>Name</label>
            <FormInput
                control={control}
                name="name"
                placeholder="Enter your Name"
            />
             <FormContentWrapper/>
            <label>Email</label>
            <FormInput
                control={control}
                name="email"
                placeholder="Enter your Email"
            />
            < FormContentWrapper/>
            <label>Address</label>

            <FormInput
                control={control}
                name="address"
                placeholder="Enter your Address"
            />
             <FormContentWrapper/>
            <label>Number</label>
            <FormInput
                control={control}
                name="number"
                placeholder="Enter your number"

            />
               <FormContentWrapper/>

            <label>CompanyName</label>
            <FormInput
                control={control}
           
            name="companyname"
                placeholder="Enter your companyname"
            />
               <FormContentWrapper/>
            <UpButton type="submit" variant="contained" onClick={SubmitButton}>Submit</UpButton>
            </FormWrapper>
        </>
    );
};
export default FormDrawer;