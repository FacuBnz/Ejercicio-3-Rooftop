import { expect } from 'chai';
import axios from 'axios';
import nock from 'nock';

function makeRequest() {
    return axios.get('http://localhost:3000/user')
}
describe('Only authorized users can access', function () {
    describe('When token is present', function () {
        beforeEach(function () {
            nock('http://localhost:3000').get('/user').reply(200, 'ok')
        })
        it('Says ok if authorized', () => {
            return makeRequest().then(data => {
                return expect(data.data).to.be.equal('ok')
            })
        })
    })
    describe('When token is not present', () => {
        beforeEach(function () {
            nock('http://localhost:3000').get('/user').replyWithError('401')
        })
        it('Gives 401 code if not authorized', () => {
            return makeRequest().catch(err => {
                expect(err.message).to.be.equal('401', `Code is ${err.message}`)
            })
        })
    })
})