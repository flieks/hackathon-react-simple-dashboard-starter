import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { ThemeOptions } from '@mui/material';
import themeColors from './themeColors'
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AppRouter } from './AppRouter'
// import LazyLoader from './LazyLoader'

const theme = createTheme(themeColors as ThemeOptions);

const queryClient = new QueryClient()

export default function AppMaterial() {
    return <StyledEngineProvider injectFirst>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                {/* <LazyLoader /> */}
                <AppRouter />

                <ToastContainer
                    position="bottom-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </ThemeProvider>
        </QueryClientProvider>
    </StyledEngineProvider>

}