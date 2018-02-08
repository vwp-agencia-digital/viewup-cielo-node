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
        "MerchantOrderId": "2014111706",
        "Customer":
            {
                "Name": "Comprador Teste Boleto",
                "Identity": "1234567890",
                "Address":
                    {
                        "Street": "Avenida Marechal Câmara",
                        "Number": "160",
                        "Complement": "Sala 934",
                        "ZipCode": "22750012",
                        "District": "Centro",
                        "City": "Rio de Janeiro",
                        "State": "RJ",
                        "Country": "BRA"
                    }
            },
        "Payment":
            {
                "Type": "Boleto",
                "Amount": 15700,
                "Provider": "INCLUIR PROVIDER",
                "Address": "Rua Teste",
                "BoletoNumber": "123",
                "Assignor": "Empresa Teste",
                "Demonstrative": "Desmonstrative Teste",
                "ExpirationDate": "5/1/2015",
                "Identification": "11884926754",
                "Instructions": "Aceitar somente até a data de vencimento, após essa data juros de 1% dia."
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
            const merchant = new Merchant('ce9f9e03-5e49-4cae-b579-2f83ab0ac5c2', 'RKGFELXMNQJHEODQHRWIOFQWRAKVZMDECITLVMEN');
            const sale = (new Sale).populate(shape);
            const saleResponse = await (new CieloEcommerce(merchant, environment)).createSale(sale);
            should(saleResponse).be.an.instanceOf(Sale);

            const saleQuery = await (new CieloEcommerce(merchant, environment)).getSale(saleResponse.getPayment().getId());

            should(saleQuery).be.an.instanceOf(Sale);

            const captureSale = await (new CieloEcommerce(merchant, environment)).captureSale({
                paymentId: saleResponse.getPayment.getId(),
                amount: shape.Payment.Amount,
                serviceTaxAmount: null
            });

            should(captureSale).be.an.instanceOf(Sale);

            const cancelSale = await  (new CieloEcommerce($merchant, $environment)).cancelSale({
                paymentId: saleResponse.getPayment().getId(),
                amount: 15700
            });

            should(cancelSale).be.an.instanceOf(Sale);

            should(saleResponse.getPayment().getId()).be.eql(saleQuery.getPayment().getId());
            should(saleResponse.getPayment().getId()).be.eql(captureSale.getPayment().getId());
            should(saleResponse.getPayment().getId()).be.eql(cancelSale.getPayment().getId());

            return null;
        } catch (e) {


            // should(e).be.an.instanceOf(CieloRequestException);

            throw e;
        }

    });
});