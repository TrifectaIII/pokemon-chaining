import {
    configureStore,
    ThunkAction,
    Action,
} from '@reduxjs/toolkit';

import globalReducer from './globalSlice';
import pokeReducer from './pokeSlice';

// Store containing all state slices
export const store = configureStore({
    reducer: {
        global: globalReducer,
        poke: pokeReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
