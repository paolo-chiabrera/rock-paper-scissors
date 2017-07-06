import {expect} from 'chai';

import {
  ROCK,
  PAPER,
  SCISSORS
} from './index';

describe('shapes', () => {
  it('should export ROCK, PAPER, SCISSORS', () => {
    expect(ROCK).to.equal('ROCK');
    expect(PAPER).to.equal('PAPER');
    expect(SCISSORS).to.equal('SCISSORS');
  });
});
