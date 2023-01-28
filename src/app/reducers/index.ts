import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { counterReducer, CounterState, COUNTER_KEY } from './counter';

export interface State {
  [COUNTER_KEY]: CounterState;
}

export const reducers: ActionReducerMap<State> = {
  [COUNTER_KEY]: counterReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
