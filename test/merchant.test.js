const should = require("should");
const Cielo = require("./../lib");
const Merchant = Cielo.Merchant;

describe("Cielo Merchant checker ", function () {
    it('Create merchant error without id/key', function () {
        should(() => new Merchant()).throw("Provide a valid ID or KEY");
    });
    it('Create a merchant', () => {
        const merchant = new Merchant('STORE ID', 'STORE KEY');
        should(merchant.getId()).eql('STORE ID');
        should(merchant.getKey()).eql('STORE KEY');
    })
});