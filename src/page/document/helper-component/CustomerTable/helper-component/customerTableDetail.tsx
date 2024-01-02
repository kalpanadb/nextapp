import * as React from 'react';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    TablePagination,
} from '@mui/material';
import { useCustomerData } from '@/hooks/useCustomer1';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import UpDrawer from '@/ui-component/upDrawer/UpDrawer';
import { StyledFrom, SubmitButton } from '../../CustomerAdd/customeradd.styled';
import FormDrawer from '../../CustomerFrom/drawer';
import { useRouter } from 'next/navigation';
import UpButton from '@/ui-component/upButton/UpButton';
import { StyledHead } from '../customerDetail.styled';



const CustomerTable = (props: any) => {
    const {
        modalOpen,
        toggle,
        customerUpdateClick,
        form,
        onSubmit,
        customerDeleteClick,
        filteredCustomers,
        page, rowsPerPage,
        handleChangeRowsPerPage,
        handleChangePage,
        handleToggle,
        ToggleSwitch 
    } = props;



    const { handleSubmit} = form;
    const { data: customers, error, isLoading } = useCustomerData();
    console.log('Customers:', customers);
    console.log('Error:', error);
    console.log('Loading:', isLoading);
    const router = useRouter();

    const handleDetails = (customerId: any) => {
        router.push(`/dashboard/${customerId}`);
    };


    const updateDrawer = () => {
        return (
            <UpDrawer
                open={modalOpen}
                position="right"
                onClick={toggle}
                title="update data">
                <StyledFrom onSubmit={handleSubmit(onSubmit)} noValidate>
                    <FormDrawer control={form.control} onSubmit={SubmitButton} />
                </StyledFrom>
            </UpDrawer>
        );
    };

    const renderButtons = (customer: any) => {
        return (
            <>
                <UpButton onClick={() => handleDetails(customer.id)}>
                    <RemoveRedEyeIcon /></UpButton>
                <UpButton onClick={() => customerUpdateClick(customer)}>
                    <EditIcon /></UpButton>
                <UpButton onClick={() => customerDeleteClick(customer.id)}>
                    <DeleteIcon /></UpButton>
            </>
        )
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <StyledHead>
                        <TableRow>
                            <TableCell align='center'>id</TableCell>
                            <TableCell align='center'>Name</TableCell>
                            <TableCell align='center'>Email</TableCell>
                            <TableCell align='center'>Address</TableCell>
                            <TableCell align='center'>Number</TableCell>
                            <TableCell align='center'>CompanyName</TableCell>
                            <TableCell align='center'>Status</TableCell>
                            <TableCell align='center'>Action</TableCell>
                        </TableRow>
                    </StyledHead>
                    {filteredCustomers.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={6} align='center'>No customer details</TableCell>
                        </TableRow>
                    ) : (
                        <TableBody>

                            {filteredCustomers
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((customer: any) => (
                                    <TableRow key={customer.id}>
                                        <TableCell component="th" scope="row" align='center'>
                                            {customer.id}
                                        </TableCell>
                                        <TableCell align='center'>{customer.name}</TableCell>
                                        <TableCell align='center'>{customer.email}</TableCell>
                                        <TableCell align='center'>{customer.address}</TableCell>
                                        <TableCell align='center'>{customer.number}</TableCell>
                                        <TableCell align='center'>{customer.companyname}</TableCell>
                                        <TableCell align='center'>
                                            <ToggleSwitch
                                                customer={customer}
                                                onChange={handleToggle}/>   
                                        </TableCell>
                                        <TableCell align='center'>
                                            {updateDrawer()}
                                            {renderButtons(customer)}
                                        </TableCell>
                                    </TableRow>
                                ))}

                        </TableBody>
                    )}
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={filteredCustomers.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
        </>
    );
};

export default CustomerTable;
