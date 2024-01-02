'use client';
import CustomerStateProvider from "@/hooks/useCustomer1";
import { ButtonWraper, TableStyled } from "./Document.styled";
import AddingCustomer from "./helper-component/CustomerAdd/customerAdd";
import CustomerTable from "./helper-component/CustomerTable/helper-component/customerTableDetail";
import { useMemo } from "react";
import CustomerSearch from "./helper-component/CustomerTable/helper-component/CustomerSearch";

interface MyProps {
    toggle: () => void;
    modalOpen: boolean;
}

const CustomerPage = () => {
    const {
        modalOpen,
        toggle,
        customerUpdateClick,
        form,
        onSubmit,
        customerDeleteClick,
        searchInputChange,
        filteredCustomers,
        handleChangePage,
        handleChangeRowsPerPage, 
        page, 
        searchInput,
        rowsPerPage,
        handleToggle ,
        ToggleSwitch 
    } = CustomerStateProvider();
    const CustomerListProps = useMemo(() => {
        return {
            modalOpen,
            toggle,
            customerUpdateClick,
            form,
            onSubmit,
            customerDeleteClick,
            filteredCustomers,
            page,
            rowsPerPage,
            handleChangeRowsPerPage,
            handleChangePage,
            handleToggle,
            ToggleSwitch 
        };
    }, [
         modalOpen,
        toggle,
        customerUpdateClick,
        form,
        onSubmit,
        customerDeleteClick,
        filteredCustomers,
        page, 
        rowsPerPage,
        handleChangeRowsPerPage,
        handleChangePage,
        handleToggle,
        ToggleSwitch 
    ]);
    const SearchProps=useMemo(()=>{
        return {
            searchInput,
            searchInputChange
        };
    },[
        searchInput,
        searchInputChange
    ]);

    return (
        <>
            <CustomerSearch {...SearchProps}/>

            <ButtonWraper >
                <AddingCustomer />
            </ButtonWraper>

            <TableStyled >
                <CustomerTable {...CustomerListProps} />
            </TableStyled>
        </>
    );
};

export default CustomerPage;