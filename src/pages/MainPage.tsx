import React from 'react';
import {
    RouteComponentProps,
} from 'react-router-dom';

import {
    Typography,
    Box,
    makeStyles,
} from '@material-ui/core';

import {
    useAppSelector,
    useAppDispatch,
} from '../state/hooks';
import {
    selectLoad,
    fetchPokemonInfoAsync,
} from '../state/pokemonSlice';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '3rem',
    },
    buttons: {
        marginTop: '3rem',
    },
}));

// main index page for empty route
const MainPage = (props: RouteComponentProps<{}>): JSX.Element => {

    const classes = useStyles();
    const dispatch = useAppDispatch();

    const load = useAppSelector(selectLoad);
    if (load === 'unloaded') dispatch(fetchPokemonInfoAsync());

    return (
        <Box
            alignItems='center'
            display='flex'
            flexDirection='column'
            className={classes.root}
        >
            <Typography
                variant='h2'
                align='center'
            >
                Pokemon Chaining
            </Typography>
        </Box>
    );

};

export default MainPage;
