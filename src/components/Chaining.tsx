import React from 'react';

import {
    Box,
    Select,
    MenuItem,
    FormControl,
    FormHelperText,
    InputLabel,
    makeStyles,
} from '@material-ui/core';

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
        <Box className={classes.root}>

            {/* Starting Pokemon Input */}
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

            {/* Ending Pokemon Input */}
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
        </Box>
    );

};

export default Chaining;
