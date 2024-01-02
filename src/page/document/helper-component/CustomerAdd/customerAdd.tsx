"use client"
import CustomerStateProvider, { useCustomerAdd } from "@/hooks/useCustomer1";
import UpButton from "@/ui-component/upButton/UpButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { AddButtonWraper, StyledFrom, SubmitButton } from "./customeradd.styled";
import FormDrawer from "../CustomerFrom/drawer";
import UpDrawer from "@/ui-component/upDrawer/UpDrawer";
import { UserValues } from "../../types";

const AddingCustomer = () => {
    const form = useForm<UserValues>({
        defaultValues: {
            name: '',
            email: '',
            number: '',
            address: '',
            companyname: '',
            isActive: true
        },
    });
    const { handleSubmit, control, reset } = form;

    const { toggle, modalOpen } = CustomerStateProvider();
    const { mutate: addCustomer } = useCustomerAdd();


    const renderAddButton = () => {
        return (
            <AddButtonWraper>
            <UpButton onClick={toggle}>
                {'+ Add '}
            </UpButton>
            </AddButtonWraper>
        );
    };
    const formSubmit: SubmitHandler<UserValues> = async (data: UserValues) => {
        try {
            addCustomer(data);
            toggle();
            reset();
        } catch (error) {
            console.error('Error during form submission:', error);
        }
    };
    return (
        <>
            {renderAddButton()}
            <UpDrawer
                open={modalOpen}
                title="Cutomer add Details"
                position="left"
                onClick={toggle}>
                <StyledFrom onSubmit={handleSubmit(formSubmit)} noValidate>
                    <FormDrawer control={control} onClick={SubmitButton} />
                </StyledFrom>
            </UpDrawer>
        </>
    );
}
export default AddingCustomer;

