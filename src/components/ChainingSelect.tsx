import React from 'react';

import {
    Select,
    MenuItem,
    FormControl,
    FormHelperText,
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
    select: {
        minWidth: '100%',
    },
}));

//  chaining display component
const ChainingSelect = (props: {}): JSX.Element => {

    const classes = useStyles();
    const dispatch = useAppDispatch();

    const pokemonItems = useAppSelector(selectPokemon)?.
        map((poke) => poke.name).
        map((name) => <MenuItem key={name} value={name}>{name}</MenuItem>);

    const startingPokemon = useAppSelector(selectStartingPokemon);
    const endingPokemon = useAppSelector(selectEndingPokemon);

    const selectVariant: 'filled' | 'outlined' | 'standard' = 'outlined';

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
                <FormControl className={classes.select}>
                    <Select
                        value={startingPokemon}
                        onChange={handleStarting}
                        variant={selectVariant}
                        labelId='starting-pokemon-input-label'
                        color='secondary'
                    >
                        {pokemonItems}
                    </Select>
                    <FormHelperText
                        variant={selectVariant}
                        id='starting-pokemon-input-label'
                    >
                        Starting Pokemon
                    </FormHelperText>
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
                <FormControl className={classes.select}>
                    <Select
                        value={endingPokemon}
                        onChange={handleEnding}
                        variant={selectVariant}
                        labelId='ending-pokemon-input-label'
                        color='secondary'
                    >
                        {pokemonItems}
                    </Select>
                    <FormHelperText
                        variant={selectVariant}
                        id='ending-pokemon-input-label'
                    >
                        Ending Pokemon
                    </FormHelperText>
                </FormControl>
            </Grid>
        </Grid>
    );

};

export default ChainingSelect;
