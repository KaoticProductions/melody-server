import {setEntries, poke, INITIAL_STATE} from './poker';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'POKE':
    return poke(state);
  }
  return state;
}
