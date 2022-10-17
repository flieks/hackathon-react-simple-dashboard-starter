import {
    Heading
} from 'styles/styled'
import { Button } from '@mui/material';

export default function MainPage(props: any) {
    const par1 = 'value1'
    const par2 = 'value2'

    return <div>
        <Heading style={{ textAlign: 'center' }}>Main Page</Heading>

        <Button onClick={async () => {
            // use FETCH API to GET data from server
            try {
                const response = await fetch(`http://sendto_api.com/getsomething?parameter1=${par1}&parameter2=${par2}`, { method: 'GET' })
                console.log(response)
                debugger
            } catch (error) {
                console.error(error)
            }
            
        }}>GET DATA FROM SERVER</Button>
    
    <div>check the code</div>
    </div>
}