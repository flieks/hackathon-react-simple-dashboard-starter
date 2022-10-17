
import styled  from '@emotion/styled';
import { keyframes }  from '@emotion/react';
import Box from '@mui/material/Box';
import { experimental_sx as sx } from '@mui/system';

const borderRadius = 50

export const BoxPrimary = styled.div(({ theme } : { theme?: any }) => ({
    color: theme.palette.primary.main
}))

// @ts-ignore
export const Container = styled(Box)(({ wide } : { wide?: boolean }) => (
    sx({
        width: {
            xs: 'calc(100% - 3em)', // theme.breakpoints.up('xs')
            sm: '70vw', // theme.breakpoints.up('sm')
            md: 700, // theme.breakpoints.up('md')
        },
        paddingBottom: '1em',
        paddingLeft: {
            xs: '1.5em', // theme.breakpoints.up('xs')
            sm: '0', // theme.breakpoints.up('sm')
            md: 0, // theme.breakpoints.up('md')
        }
    })
))

export const Center = styled.div({
    display: 'grid',
    justifyContent: 'center'
})

type HeadingProps = { theme?: any, cta?: boolean }
export const Heading: React.FC<HeadingProps & React.ComponentProps<'div'>>  = styled.div(({ theme, cta }) => ({
    color: cta && theme.palette.primary.main,
    fontSize: '2em',
    margin: '1em 0'
}))