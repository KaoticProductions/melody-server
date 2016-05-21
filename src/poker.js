import {Map} from 'immutable';

export const INITIAL_STATE = Map({ 'poke': 0 });

export function poke(state) {
  return state.update('poke', poke => poke + 1)
}
