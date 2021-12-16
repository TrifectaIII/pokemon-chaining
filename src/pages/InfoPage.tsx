import React from 'react';
import {
    RouteComponentProps,
} from 'react-router-dom';

import {
    Box,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '3rem',
    },
}));

// An information page component
const InfoPage = (props: RouteComponentProps<{}>): JSX.Element => {

    const classes = useStyles();

    return (
        <Box
            className={classes.root}
        >
            Info
        </Box>
    );

};

export default InfoPage;
