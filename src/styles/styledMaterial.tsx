import React from 'react'
import styled from '@emotion/styled';
import {
    Button as MaterialButton,
    Checkbox as MaterialCheckbox,
    FormControlLabel,
    FormControl,
    InputLabel,
    InputBase,
    IconButton,
    Icon,
    TextField as MaterialTextField
} from '@mui/material';
import { alpha } from '@mui/material/styles'
import { SxProps, Theme } from '@mui/material/styles';
import { experimental_sx as sx } from '@mui/system';
import { useTheme } from '@mui/styles';

const borderRadius = 50

export const IconClick = ({icon, onClick, ...rest}: {icon: any, onClick:any, style: any }) => {
    const theme = useTheme();

    return <IconButton onClick={onClick} {...rest}><Icon  style={{color: theme?.palette?.primary.contrastText}} >{icon || "add"}</Icon></IconButton>
}

// @ts-ignore
export const Button = styled(MaterialButton)(({ theme, white, cta, customcolor }: { theme?: any, white?: boolean, cta?: boolean, customcolor?: string }) => (
    sx({
        color: white ? "primary.main" : cta ? 'white' : 'black',
        background: !!customcolor ? customcolor : white ? 'white' : cta ? theme.palette.primary.main : theme.palette.gray[100],
        // borderRadius: borderRadius,
        fontSize: 11,
        padding: '1em 2em',
        textTransform: 'none',
        width: {
            xs: '100%', // theme.breakpoints.up('xs')
            sm: '40vw', // theme.breakpoints.up('sm')
            md: 300, // theme.breakpoints.up('md')
            // lg: 400, // theme.breakpoints.up('lg')
            // xl: 500, // theme.breakpoints.up('xl')
        },
        // '& .MuiButton-root': {
        //     width: '40em !important',
        //     background: 'secondary.main'
        // },
        // "& .MuiButton-text" : {
        //     background: 'secondary.main'
        // },
    })
))

export const Checkbox = styled(MaterialCheckbox)(() => ({
    height: '1.4em',
    borderWidth: 1,
    '& .MuiSvgIcon-root': { fontSize: 24 }
}))

export const TextField = styled(MaterialTextField)(({ theme, color }: { theme?: any, color?: string}) => ({
    width: '100%',
    color: color || theme?.palette?.petrol[200],
    '& label': {
        // marginTop: theme.spacing(2),
        color:  theme?.palette?.petrol[700],
    },
    '& fieldset': {
       border: '1px solid ' + theme?.palette?.petrol[400],
    },
    // '& fieldset.MuiOutlinedInput-notchedOutline': {
    //     border: '1px solid ' + theme?.palette?.petrol[600] + ' !important',
    //     // borderWidth: '1px !important'
    // },
    // '& .MuiInputBase-formControl:hover': {
    //     border: '1px solid red'
    // },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        color: color || theme?.palette?.petrol[900],
        // backgroundColor: theme?.palette?.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
       
        fontSize: '0.8em',
        // color: 'grey',
        width: '100%',
        // padding: '10px 12px',
        //   transition: theme.transitions.create([
        //     'border-color',
        //     'background-color',
        //     'box-shadow',
        //   ]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {

            // boxShadow: `${alpha(theme?.palette?.primary.main, 0.25)} 0 0 0 0.2rem`,
            // borderColor: theme?.palette?.primary.main,
        },
    },
}));

export const CheckboxLabel = ({ label, checked, onClick, ...rest } : {label: string | React.ReactNode, checked: boolean, onClick: any}) => <FormControlLabel onClick={onClick} control={<Checkbox {...rest} checked={checked} />} label={label} />

export const TextFieldLabel = ({ label, placeholder, style }: {label: string, placeholder: string, style?:any}) => {
    return <FormControl variant="standard" style={{ width: "100%", ...style }}>
        <InputLabel shrink htmlFor="bootstrap-input" style={{ color: 'black' }}>
            {label}
        </InputLabel>
        <TextField placeholder={placeholder} id="bootstrap-input" />
    </FormControl>
}