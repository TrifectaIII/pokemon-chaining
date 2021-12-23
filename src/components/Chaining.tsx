import React from 'react';

import {
    Select,
    MenuItem,
    FormControl,
    FormHelperText,
    InputLabel,
    Grid,
    makeStyles,
} from '@material-ui/core';
import {
    ArrowForwardIos as ArrowIcon,
} from '@material-ui/icons';

import {
    useAppSelector,
    useAppDispatch,
} from '../state/hooks';
import {
    selectPokemon,
    selectStartingPokemon,
    selectEndingPokemon,
    setStarting,
    setEnding,
} from '../state/pokemonSlice';

const useStyles = makeStyles((theme) => ({
    root: {

    },
    arrow: {
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            transform: 'rotate(90deg)',
        },
    },
    startingSelect: {
        display: 'flex',
        justifyContent: 'flex-end',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
        },
    },
    endingSelect: {
        display: 'flex',
        justifyContent: 'flex-start',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
        },
    },
}));

//  chaining display component
const Chaining = (props: {}): JSX.Element => {

    const classes = useStyles();
    const dispatch = useAppDispatch();

    const pokemon = useAppSelector(selectPokemon)?.
        map((poke) => poke.name).
        map((name) => <MenuItem key={name} value={name}>{name}</MenuItem>);

    const startingPokemon = useAppSelector(selectStartingPokemon);
    const endingPokemon = useAppSelector(selectEndingPokemon);

    // handler functions
    const handleStarting = (event: React.ChangeEvent<{
        name?: string | undefined;
        value: unknown;
    }>) => {

        if (typeof event.target.value === 'string') {

            dispatch(setStarting(event.target.value));

        }

    };

    const handleEnding = (event: React.ChangeEvent<{
        name?: string | undefined;
        value: unknown;
    }>) => {

        if (typeof event.target.value === 'string') {

            dispatch(setEnding(event.target.value));

        }

    };

    return (
        <Grid
            container
            spacing={3}
            className={classes.root}
            alignItems='center'
            justifyContent='center'
        >
            {/* Starting Pokemon Input */}
            <Grid
                item
                xs={12}
                md={5}
                className={classes.startingSelect}
            >
                <FormControl>
                    <InputLabel
                        shrink
                        id='starting-pokemon-input-label'
                    >
                        Starting Pokemon
                    </InputLabel>
                    <Select
                        value={startingPokemon}
                        onChange={handleStarting}
                        variant='standard'
                        labelId='starting-pokemon-input-label'
                    >
                        {pokemon}
                    </Select>
                    <FormHelperText>Starting Pokemon</FormHelperText>
                </FormControl>
            </Grid>

            {/* Arrow between */}
            <Grid
                item
                xs={12}
                md={2}
                className={classes.arrow}
            >
                <ArrowIcon />
            </Grid>

            {/* Ending Pokemon Input */}
            <Grid
                item
                xs={12}
                md={5}
                className={classes.endingSelect}
            >
                <FormControl>
                    <InputLabel
                        shrink
                        id='ending-pokemon-input-label'
                    >
                        Ending Pokemon
                    </InputLabel>
                    <Select
                        value={endingPokemon}
                        onChange={handleEnding}
                        variant='standard'
                        labelId='ending-pokemon-input-label'
                    >
                        {pokemon}
                    </Select>
                    <FormHelperText>Ending Pokemon</FormHelperText>
                </FormControl>
            </Grid>
        </Grid>
    );

};

export default Chaining;
