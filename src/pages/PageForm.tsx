import {
    Heading
} from 'styles/styled'
import { useForm } from 'react-hook-form'
import { TextField, IconClick } from 'styles/styledMaterial';
import { Button } from '@mui/material';

import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function PageForm(props: any) {
    const { register, handleSubmit } = useForm()

    const TextFieldCustom = ({ reg, label, type = 'text' }) => <TextField
        {...register(reg)}
        autoComplete='off'
        type={type}
        label={label}
        style={{ margin: "0.75em 0" }}
    />

    const onSubmit = data => {
        // use FETCH API  to send data to server
        debugger
    }

    return <div>
        <Heading style={{ textAlign: 'center' }}>Form example</Heading>

        <form onSubmit={handleSubmit(onSubmit)}>
            <TextFieldCustom reg='name' label="Name" />
            <TextFieldCustom reg='last name' label="Last Name" />

            {/* <TimePicker reg='name'
                label="Time"
                renderInput={(params) => <TextField {...params} />}
            />
            <DateTimePicker reg='name'
                label="Date Time picker"
                renderInput={(params) => <TextField {...params} />}
            /> */}

            <Button type="submit">SEND</Button>
        </form>

        <h5>More types coming like date</h5>
    </div>
}