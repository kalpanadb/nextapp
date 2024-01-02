"use client";

import Typography from "@mui/material/Typography";
import { usePathname } from "next/navigation";
import { StyledCard, StyledCardContent, StyledMedia } from "./profile.styled";
import { CardContent } from "@mui/material";
import { useCustomerData } from "@/hooks/useCustomer1";
import { log } from "console";



const CustomerDetailsPage = () => {
  const { data: customers } = useCustomerData();
  const pathId = usePathname();
  const customerId = parseInt(pathId.split('/').pop() || '');
  console.log('id', pathId);

  const customer = customers && customers.find((c: any) => c.id === customerId);
  console.log("active", customer);

  let status: any | null = null;

  if (customer) {
    status = customer.isActive ? "Active" : "Inactive";
    console.log(customer);
    
  }

  return (
    <>
      {customer && (
        <StyledCard key={customer.id}>
          <StyledMedia
            component="img"
            alt="Customer Image"
            height="100"
            image=""
          />
          <CardContent >
            <StyledCardContent>
              <Typography variant="h5" component="div" padding={'10px'}>
                Customer Details
              </Typography>
              <ul style={{ listStyle: 'none', textDecoration: 'none' }}>
                <li style={{ marginBottom: '10px' }}>Name: {customer.name}</li>
                <li style={{ marginBottom: '10px' }}>Email: {customer.email}</li>
                <li style={{ marginBottom: '10px' }}>Address: {customer.address}</li>
                <li style={{ marginBottom: '10px' }}>Number: {customer.number}</li>
                <li style={{ marginBottom: '10px' }}>CompanyName: {customer.companyname}</li>
                <li style={{ marginBottom: '10px' }}>Status: {status}</li>
              </ul>
            </StyledCardContent>
          </CardContent >
        </StyledCard>
      )}
    </>
  );
};

export default CustomerDetailsPage;
