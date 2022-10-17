import { useLocation, BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

import PageForm from './pages/PageForm'
import PageList from './pages/PageList'
import MainPage from './pages/MainPage'
import PageChart from './pages/PageChart'
import Layout from './Layout'

export const AppRouter = () => {
    return <BrowserRouter>
        <Routes>
            {/* <Route  path="/" element={<Navigate to={account ? 'imbalance' : 'landing'} />} /> */}
            <Route  path="" element={<Navigate to={'/landing'} />} />

            <Route element={<Layout />}>
                <Route path={"landing"} element={<MainPage />} />
                <Route path={"form"} element={<PageForm />} />
                <Route path={"list"} element={<PageList />} />
                <Route path={"chart"} element={<PageChart />} />
            </Route>
            <Route
                path="*"
                element={
                    <div>
                        <h2>Page not found</h2>
                    </div>
                }
            />
        </Routes>

        <CssBaseline />

        {/* <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="admin" element={<AdminPage />} />
    </Routes> */}
    </BrowserRouter>
}