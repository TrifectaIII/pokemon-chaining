import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import {
    Container,
    CssBaseline,
    ThemeProvider,
    createTheme,
    responsiveFontSizes,
    Theme,
    ThemeOptions,
} from '@material-ui/core';

import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import MenuDrawer from './components/MenuDrawer';
import {useAppSelector} from './state/hooks';
import {selectDarkMode} from './state/globalSlice';

// helper function for generating themes
const createAppTheme =
    (options: ThemeOptions): Theme => responsiveFontSizes(createTheme(options));

// set up dark and light themes
// https://material-ui.com/customization/color/#playground
const lightThemeOptions: ThemeOptions = {
    palette: {
        type: 'light',
        primary: {
            main: '#e4000f',
        },
        secondary: {
            main: '#009ce4',
        },
    },
};
const darkThemeOptions: ThemeOptions = {
    palette: {
        type: 'dark',
        primary: {
            main: '#e4000f',
        },
        secondary: {
            main: '#009ce4',
        },
    },
};

// Main App component
const App = (): JSX.Element => {

    // choose theme based on state
    const darkMode = useAppSelector(selectDarkMode);
    const lightTheme = createAppTheme(lightThemeOptions);
    const darkTheme = createAppTheme(darkThemeOptions);
    const theme = darkMode ? darkTheme : lightTheme;

    return (
        // provider theme
        <ThemeProvider theme={theme}>

            {/* normalize css */}
            <CssBaseline />

            <Router>
                {/* include header and menu on every page */}
                <Header />
                <MenuDrawer />

                {/* route based on url */}
                <Container>
                    <Switch>
                        {/* main page */}
                        <Route
                            exact path='/'
                            component={MainPage}
                        />
                        {/* information page */}
                        <Route
                            exact path='/about'
                            component={AboutPage}
                        />
                        {/* default to 404 */}
                        <Route component={NotFoundPage} />
                    </Switch>
                </Container>
            </Router>
        </ThemeProvider>
    );

};

export default App;
