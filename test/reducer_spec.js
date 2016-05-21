import {Map} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {
  it('handles POKE', () => {
    const initialState = Map({ 'poke':0 });
    const action = {type: 'POKE'};
    const nextState = reducer(initialState, action);
    expect(nextState).to.equal(Map({ 'poke':1 }));
  });

  it('has an initial state', () => {
    const action = { type: 'POKE' };
    const nextState = reducer(undefined, action);
    expect(nextState).to.equal(Map({ 'poke': 1 }));
  });

  it('can be used with reduce', () => {
    const actions = [
      { type: 'POKE' },
      { type: 'POKE' }
    ];
    const finalState = actions.reduce(reducer, Map({'poke': 0}));
    expect(finalState).to.equal(Map({ 'poke': 2}));
  });
});
