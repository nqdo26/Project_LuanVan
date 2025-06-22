import { Fragment, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layouts';
import { AuthContext } from './components/Context/auth.context';
import axios from '~/utils/axios.custiomize';
import { Spin } from 'antd';

function App() {
    const { setAuth, appLoading, setAppLoading } = useContext(AuthContext);

    useEffect(() => {
        const featchAccount = async () => {
            setAppLoading(true);
            const res = await axios.get('/v1/api/account');
            if (res) {
                setAuth({
                    isAuthenticated: true,
                    user: {
                        fullName: res.data.fullName,
                        email: res.data.email,
                        name: res.data.name,
                        avatar: res.data.avatar,
                        isAdmin: res.data.isAdmin,
                        favortites: res.data.favortites,
                        tours: res.data.tours,
                    },
                });
            }
            setAppLoading(false);
        };

        featchAccount();
    }, [setAppLoading, setAuth]);

    return (
        <>
            {appLoading && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        zIndex: 9999,
                        width: '100vw',
                        height: '100vh',

                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Spin
                        style={{
                            color: 'rgba(253, 96, 80, 1)',
                        }}
                        size="large"
                    />
                </div>
            )}

            <Router>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            let Layout = DefaultLayout;

                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
