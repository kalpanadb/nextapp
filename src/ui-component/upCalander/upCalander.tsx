import DatePicker from "react-date-picker";
import { Wrapper } from "./UpCalander.styled";
import { DatePickerProps } from "./types";

const UpDatePicker=({startDate,setStartDate}:DatePickerProps)=> {
    return (

        <Wrapper>
            <DatePicker selected={startDate}
                onChange={(date: Date) => setStartDate(date)
                }
                inline />

        </Wrapper>

    );
}
export default UpDatePicker;