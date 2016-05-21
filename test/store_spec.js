import {Map} from 'immutable';
import {expect} from 'chai';

import makeStore from '../src/store';

describe('store', () => {

  it('is a Redux store configured with the correct reducer', () => {
    const store = makeStore();
    expect(store.getState()).to.equal(Map({ 'poke': 0 }));
    store.dispatch({ type: 'POKE' });
    expect(store.getState()).to.equal(Map({ 'poke': 1 }));
  });

});
