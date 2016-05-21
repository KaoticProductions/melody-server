import {List, Map} from 'immutable'
import {expect} from 'chai';

import {poke} from '../src/poker';

describe('application logic', () => {
  describe('poke', () => {
    it('adds a poke to the state', () => {
      let state = Map({ 'poke':0 });
      let nextState = poke(state);
      expect(nextState).to.equal(Map({ 'poke':1 }));
    });
  });
});
