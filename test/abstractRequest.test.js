const AbstractRequest = require('./../lib/Ecommerce/Request/AbstractRequest').default;
require('./../lib/Locales/pt-br');


const Merchant = require('./../lib/Merchant').default;
const Environment = require('./../lib/Ecommerce/Environment').default;
const should = require("should");


describe("Abstract Request ", function () {
    const settings = {
        MerchantId: "4ee62ca0-72f4-41e0-9463-2b387ab67616",
        MerchantKey: "JNQYFXBOGYIIQGSQEGJJSNGIVIBJHJQIQBQAIEZD"
    };
    it('Method payment request ping', function (done) {


        const merchant = new Merchant(settings.MerchantId, settings.MerchantKey);
        const request = new AbstractRequest(merchant);
        const data = {
            "MerchantOrderId": "2014111703",
            "Customer": {
                "Name": "Comprador crédito simples"
            },
            "Payment": {
                "Type": "CreditCard",
                "Amount": 15700,
                "Installments": 1,
                "SoftDescriptor": "123456789ABCD",
                "CreditCard": {
                    "CardNumber": "1234123412341231",
                    "Holder": "Teste Holder",
                    "ExpirationDate": "12/2030",
                    "SecurityCode": "123",
                    "Brand": "Visa"
                }
            }
        };

        request
            .sendRequest(AbstractRequest.POST, 'https://apisandbox.cieloecommerce.cielo.com.br/1/sales/', data)
            .then(() => done())
            .catch((e) => done(e))
    });
});