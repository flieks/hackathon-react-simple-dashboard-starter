import {
    Heading
} from 'styles/styled'
import { useForm } from 'react-hook-form'
import { TextField, IconClick } from 'styles/styledMaterial';
import { Button } from '@mui/material';

import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import "dayjs";
import { useState } from 'react';

export default function PageForm(props: any) {
    const { register, handleSubmit } = useForm()
    
    const [dateStart, setDateStart] = useState<any>(undefined)
    const [dateEnd, setDateEnd] = useState<any>(undefined)

    const TextFieldCustom = ({ reg, label, type = 'text' }) => <TextField
        {...register(reg)}
        autoComplete='off'
        type={type}
        label={label}
        style={{ margin: "0.75em 0" }}
    />

    const onSubmit = async data => {
        // use FETCH API to send data to server
        try {
            const response = await fetch(`http://sendto_api.com/create_something`, {
                method: 'POST',
                body: JSON.stringify({
                    ...data,
                    dateStart,
                    dateEnd
                })
            })
            console.log(response)
            debugger
        } catch (error) {
            console.error(error)
        }
    }

    return <div>
        <Heading style={{ textAlign: 'center' }}>Form example</Heading>

        <form onSubmit={handleSubmit(onSubmit)}>
            <TextFieldCustom reg='name' label="Name" />
            <TextFieldCustom reg='last name' label="Last Name" />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                    value={dateStart}
                    onChange={(e) => {
                        setDateStart(e["$d"])
                    }}
                    renderInput={(params) => <TextField {...params}  style={{ margin: "0.75em 0" }} />}
                />
                <DateTimePicker
                    value={dateEnd}
                    onChange={(e) => {
                        setDateEnd(e["$d"])
                    }}
                    renderInput={(params) => <TextField {...params}  style={{ margin: "0.75em 0" }} />}
                />
            </LocalizationProvider>

            <Button type="submit">SEND TO SERVER</Button>
        </form>

        <div>check the code for submit</div>

    </div>
}