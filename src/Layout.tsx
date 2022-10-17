import { Outlet, Link, useLocation } from "react-router-dom";
import {
    Container,
    Center
} from 'styles/styled'
import { useTheme } from '@mui/styles';

const MenuItem = ({ children, path }) => {
    const theme = useTheme();
    const location = useLocation()

    const active = location.pathname.indexOf(path) > -1

    return <Link to={path} style={{
        margin: '0 1em', background: !!active && theme.palette.primary.light,
        border: !active && '1px solid ' + theme.palette.primary.light,
        color: !active ? theme.palette.primary.main : 'white',
        padding: '0 0.5em', cursor: 'pointer', borderRadius: 3
    }}>
        {children}
    </Link>
}

const menu = [
    {
        path: '/landing',
        name: 'Main page'
    },
    {
        path: '/form',
        name: 'Form code example'
    },
    {
        path: '/list',
        name: 'GET server-data code example'
    },
        {
        path: '/chart',
        name: 'Chart code example'
    },
]

export default function Layout() {
    return <Center style={{ height: '100%'}}>
        <Container style={{ height: '100%' }}>
            <div style={{ display: 'grid', gridTemplateRows: '5em 1fr', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>

                    {menu.map((item, index) => {
                        return <MenuItem key={index} path={item.path}>{item.name}</MenuItem>
                    })}

                </div>

                <Outlet />
            </div>
           
        </Container>
    </Center>
}