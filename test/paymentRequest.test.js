const Sale = require("./../lib/Ecommerce/Sale").default;
const Environment = require("./../lib/Ecommerce/Environment").default;
const Merchant = require("./../lib/Merchant").default;
const AbstractRequest = require("../lib/Ecommerce/Request/AbstractRequest").default;
const CieloRequestException = require('../lib/Ecommerce/Request/CieloRequestException');
require("./../lib/Locales/pt-br").default(AbstractRequest);

const CieloEcommerce = require("./../lib/Ecommerce/CieloEcommerce").default;
const CreateSaleRequest = require("./../lib/Ecommerce/Request/CreateSaleRequest").default;
const should = require("should");


describe("Create new Payment", function () {
    const shape = {
        "MerchantOrderId":"2014111701",
        "Customer":{
            "Name":"Comprador crédito completo",
            "Email":"compradorteste@teste.com",
            "Birthdate":"1991-01-02",
            "Address":{
                "Street":"Rua Teste",
                "Number":"123",
                "Complement":"AP 123",
                "ZipCode":"12345987",
                "City":"Rio de Janeiro",
                "State":"RJ",
                "Country":"BRA"
            },
            "DeliveryAddress": {
                "Street": "Rua Teste",
                "Number": "123",
                "Complement": "AP 123",
                "ZipCode": "12345987",
                "City": "Rio de Janeiro",
                "State": "RJ",
                "Country": "BRA"
            }
        },
        "Payment":{
            "Type":"CreditCard",
            "Amount":15700,
            "Currency":"BRL",
            "Country":"BRA",
            "ServiceTaxAmount":0,
            "Installments":15,
            "Interest":"ByIssuer",
            "Capture":true,
            "Authenticate":false,
            "SoftDescriptor":"123456789ABCD",
            "CreditCard":{
                "CardNumber":"1234123412341231",
                "Holder":"Teste Holder",
                "ExpirationDate":"12/2030",
                "SecurityCode":"123",
                "SaveCard":"false",
                "Brand":"Visa"
            }
        }
    };
    it('Create a payment - Prepare', async function () {
        try {


            // ...
            // Configure o ambiente
            const environment = Environment.sandbox();

            // Configure seu merchant
            const merchant = new Merchant('ce9f9e03-5e49-4cae-b579-2f83ab0ac5c2', 'RKGFELXMNQJHEODQHRWIOFQWRAKVZMDECITLVMEN');
            const sale = (new Sale()).populate(shape);
            const transaction = (new CieloEcommerce(merchant, environment)).prepare(sale);
            should(transaction).be.an.instanceOf(CreateSaleRequest);
            should(transaction).be.an.instanceOf(AbstractRequest);

            const saleResponse = await  transaction.execute(sale);

            should(saleResponse).be.an.instanceOf(Sale);


        } catch (e) {
            throw e;
        }

    });
    it('Create a payment - Create / Query / Capture / Cancel', async function () {
        try {


            // ...
            // Configure o ambiente
            const environment = Environment.sandbox();

            // Configure seu merchant
            const merchant = new Merchant(
                'ca998c16-4e43-4d5a-9897-74f799225938',
                'IRSELEYEPKQPKMRMDMYRVHNQEUPOCLOBWCBUOHNJ');
            const sale = (new Sale).populate(shape);
            const saleResponse = await (new CieloEcommerce(merchant, environment)).createSale(sale);
            should(saleResponse).be.an.instanceOf(Sale);

            const saleQuery = await (new CieloEcommerce(merchant, environment)).getSale(saleResponse.getPayment().getPaymentId());

            should(saleQuery).be.an.instanceOf(Sale);

            const captureSale = await (new CieloEcommerce(merchant, environment)).captureSale({
                paymentId: saleResponse.getPayment().getPaymentId(),
                amount: shape.Payment.Amount,
                serviceTaxAmount: null
            });

            should(captureSale).be.an.instanceOf(Sale);

            const cancelSale = await  (new CieloEcommerce($merchant, $environment)).cancelSale({
                paymentId: saleResponse.getPayment().getPaymentId(),
                amount: 15700
            });

            should(cancelSale).be.an.instanceOf(Sale);

            should(saleResponse.getPayment().getPaymentId()).be.eql(saleQuery.getPayment().getPaymentId());
            should(saleResponse.getPayment().getPaymentId()).be.eql(captureSale.getPayment().getPaymentId());
            should(saleResponse.getPayment().getPaymentId()).be.eql(cancelSale.getPayment().getPaymentId());

            return null;
        } catch (e) {
            //should(e).be.an.instanceOf(CieloRequestException);
            throw e;
        }

    });
});