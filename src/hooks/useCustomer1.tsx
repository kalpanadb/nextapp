import { UserValues } from "@/page/document/types";
import { Switch } from "@mui/material";
import axios from "axios";
import { useReducer } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";

const initialState = {
    modalOpen: false,
    searchTerm: "",
    selectedCustomer: null,
    searchInput: '',
    filteredCustomers: [],
    page: 0,
    rowsPerPage: 5,
    isActive: true
};

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'MODAL':
            return {
                ...state,
                modalOpen: !state.modalOpen,
            };
        case 'SELECTED-CUSTOMER':
            return {
                ...state,
                selectedCustomer: action.payload,
            };


        case 'DELETED-CUSTOMER':
            return {
                ...state,
                selectedCustomer: null,
            };
        case 'SET_SERACH_INPUT':
            return {
                ...state,
                searchInput: action.payload
            };
        case 'SET_PAGE':
            return {
                ...state,
                page: action.payload
            };
        case 'SET_ROWS_PER_PAGE':
            return {
                ...state,
                rowsPerPage: action.payload,
                page: 0
            };
        case 'TOGGLE_ACTIVE':
            return {
                ...state,
                isActive: !state.isActive,
            };

        case 'SEARCH-TERM':
            return {
                ...state,
                searchTerm: action.payload
            };

        default:
            return state;
    }
};


const CustomerStateProvider = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { modalOpen, selectedCustomer, searchInput } = state;


    const form = useForm<UserValues>({
        defaultValues: {
            name: '',
            email: '',
            address: '',
            number: '',
            companyname: '',
            isActive: true
        },
    });
    const { customerUpdate } = UseUpdateCustomer();
    const { data: customers } = useCustomerData();

    const toggle = () => {
        dispatch({ type: "MODAL" });
        console.log("clicked");
    };
    const selectedCustomerDetail = (customer: any) => {
        dispatch({ type: "SELECTED-CUSTOMER", payload: customer });
    }

    const clearCustomer = () => {
        dispatch({ type: 'DELETED-CUSTOMER' })
    }
    //update
    const customerUpdateClick = (customer: any) => {
        selectedCustomerDetail(customer);
        console.log(customer, "selected Customer");
        form.reset({
            name: customer.name,
            email: customer.email,
            address: customer.address,
            number: customer.number,
            companyname: customer.companyname,
            isActive: customer.isActive
        });
        dispatch({ type: 'MODAL' })
    };
    //delete
    const customerDeleteClick = async (customerId: string) => {
        try {
            await deleteCustomer(customerId)
            clearCustomer();
            alert("Are you sure?")
        } catch (error) {
            console.log("Error in deleting customer", error)
        }
    }

    const onSubmit = async (data: UserValues) => {
        try {
            if (selectedCustomer) {
                await customerUpdate(selectedCustomer.id, data);
                dispatch({ type: 'MODAL' });
            } else {
                console.log("error");
            }

        } catch (error) {
            console.log("Error in Updating data", error);
        }

    };
    const searchInputChange = (event: any) => {
        dispatch({ type: "SET_SERACH_INPUT", payload: event.target.value });
        console.log('Search Input:', event.target.value);
    };
    const filteredCustomers = customers
        ? searchInput.length >= 3
            ? customers.filter((customer: any) =>
                Object.values(customer).some(
                    (value) =>
                        typeof value === "string" &&
                        value.toLowerCase().includes(searchInput.toLowerCase())
                )
            )
            : customers
        : [];
    // console.log('Filtered Customers:', filteredCustomers);


    const handleChangePage = (event: any, newPage: any) => {
        dispatch({ type: 'SET_PAGE', payload: newPage });
    };

    const handleChangeRowsPerPage = (event: any) => {
        const newRowsPerPage = parseInt(event.target.value, 10);
        dispatch({ type: 'SET_ROWS_PER_PAGE', payload: newRowsPerPage });
    };

    const handleToggle = async (customer: any) => {
        try {
            console.log('Before toggle:', customer.isActive);
            const updateData = { ...customer, isActive: !customer.isActive };
            console.log('After toggle:', updateData.isActive);
            await customerUpdate(customer.id, updateData);
            dispatch({ type: 'SELECTED-CUSTOMER', payload: updateData });
        } catch (error) {
            console.error('Error toggling customer:', error);
        }
    };
    
    const ToggleSwitch = ({ customer }: any) =>{
        return(
       <>
           {customer.isActive ? <span>Active</span> : <span>Inactive</span>}
           <Switch checked={customer.isActive} onChange={() => handleToggle(customer)} />
       </>
   );
   }

    return {
        modalOpen,
        toggle,
        selectedCustomer,
        selectedCustomerDetail,
        customerUpdateClick,
        form,
        onSubmit,
        searchInput,
        customerDeleteClick,
        searchInputChange,
        filteredCustomers,
        page: state.page,
        rowsPerPage: state.rowsPerPage,
        handleChangePage,
        handleChangeRowsPerPage,
        handleToggle,
        ToggleSwitch 
    }
}
export default CustomerStateProvider;

const addingCustomer = (data: any) => {
    return axios.post('http://localhost:4000/customers', data);
};
export const useCustomerAdd = () => {
    const queryClient = useQueryClient();

    return useMutation(addingCustomer, {
        onSuccess: () => {
            console.log("success");
            queryClient.invalidateQueries("customers")
        },
        onError: (error) => {
            console.log('Error adding customer:', error)
        },
    });
};

//fetching
const fetchCustomers = async () => {
    try {
        const response = await axios.get('http://localhost:4000/customers');
        return response.data;
    } catch (error) {
        console.error('Error fetching customers:', error);
        throw new Error('Failed to fetch customer data');
    }
};

export const useCustomerData = () => {
    const queryClient = useQueryClient();
    return useQuery('customers', fetchCustomers, {
        onSuccess: () => {
            queryClient.invalidateQueries('customers')
        }
    });
};

//update
const updateCustomer = (customerId: any, data: any) => {
    return axios.put(`http://localhost:4000/customers/${customerId}`, data);
};

export const UseUpdateCustomer = () => {
    const queryClient = useQueryClient();

    const updatedCustomerMutation = useMutation(
        ({ customerId, data }: any) => updateCustomer(customerId, data),

        {

            onSuccess: (updatedData: any, { customerId }) => {
                queryClient.setQueryData('customers', (prev: any) => {
                    const updatedIndex = prev.findIndex((customer: any) => customer.id === customerId);
                    if (updatedIndex !== -1) {
                        prev[updatedIndex] = { ...prev[updatedIndex], ...updatedData };
                    }
                    return [...prev];
                });
            },
        }
    );

    const customerUpdate = async (customerId: any, data: any) => {
        try {
            await updatedCustomerMutation.mutateAsync({ customerId, data });
        } catch (error) {
            console.log("Error in Updating the data", error);
        }
    };

    return { customerUpdate, updatedCustomerMutation };
};


//delete
const deleteCustomer = async (id: string) => {
    await axios.delete(`http://localhost:4000/customers/${id}`)
};

export const UseDeleteCustomer = () => {
    const queryClient = useQueryClient();

    return useMutation(deleteCustomer, {
        onSuccess: () => {
            queryClient.invalidateQueries('customers');
        },
    });
}