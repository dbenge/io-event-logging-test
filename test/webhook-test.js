import chai from 'chai';
import { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import action from '../src/action/webhook-handler.js';

chai.config.includeStack = true;
chai.use(chaiAsPromised);
chai.should();

describe('Do challenge', () => {
    describe('with name parameter', () => {
        it('Challenge should return 1234Challenge', (done) => {
            var params = {
               "challenge":"1234Challenge"
            };

            // The action returns a Promise and we can use "eventually" to wait for it.
            // If the action doesn't return a Promise we can remove "eventually"
            //   and write instead "should.deep.equal"
            action(params).should.eventually.deep.equal({challenge: "1234Challenge"}).notify(done);
        });
    })
});
