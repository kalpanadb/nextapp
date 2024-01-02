import { TextField, InputAdornment } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { StyledSearch } from '../customerDetail.styled';

interface CustomerSearchProps {
    searchInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    searchInput: string;
}

const CustomerSearch: React.FC<CustomerSearchProps> = (props) => {
    const { searchInputChange, searchInput } = props;

    return (
        <>
            <StyledSearch>
                <TextField
                    label="Search"
                    variant="outlined"
                    value={searchInput}
                    onChange={searchInputChange}
                    style={{ marginBottom: 10 }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </StyledSearch>
        </>
    );
};

export default CustomerSearch;
