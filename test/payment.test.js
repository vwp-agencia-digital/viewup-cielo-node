const {CreditCard, Customer, Environment, Payment, Sale} = require("../lib/Ecommerce");

import Merchant from "../lib/Merchant";

const should = require("should");
const CieloRequestException = require('../lib/Ecommerce/Request/CieloRequestException');
describe("Your description", function () {
    it('Your test key', async function () {

        // ...
        // Configure o ambiente
        const environment = Environment::sandbox();

        // Configure seu merchant
        const merchant = new Merchant('MERCHANT ID', 'MERCHANT KEY');

        // Crie uma instância de Sale informando o ID do pedido na loja
        const sale = new Sale('123');

        // Crie uma instância de Customer informando o nome do cliente
        const customer = sale.customer('Fulano de Tal');
        should(customer).be.an.instanceOf(Customer);

        // Crie uma instância de Payment informando o valor do pagamento
        const payment = sale.payment(15700);
        should(payment).be.an.instanceOf(Payment);

        // Crie uma instância de Credit Card utilizando os dados de teste
        // esses dados estão disponíveis no manual de integração
        const cc = payment
            .setType(Payment::PAYMENTTYPE_CREDITCARD)
            .creditCard("123", CreditCard::VISA);
        should(cc).be.an.instanceOf(CreditCard);

        cc
            .setExpirationDate("12/2018")
            .setCardNumber("0000000000000001")
            .setHolder("Fulano de Tal");

        should(cc.getExpirationDate()).be.eql("12/2018");
        should(cc.getCardNumber()).be.eql("0000000000000001");
        should(cc.getHolder()).be.eql("Fulano de Tal");


        // Crie o pagamento na Cielo
        try {
            // Configure o SDK com seu merchant e o ambiente apropriado para criar a venda
            // e crie a venda no Cielo 3.0
            const saleRequest = await (new CieloEcommerce(merchant, environment)).createSale(sale);

            should(saleRequest).be.an.instanceOf(Sale);

            // Com a venda criada na Cielo, já temos o ID do pagamento, TID e demais
            // dados retornados pela Cielo
            should(saleRequest.getPayment()).be.an.instanceOf(Payment);
            const paymentId = saleRequest.getPayment().getPaymentId();

            // Com o ID do pagamento, podemos fazer sua captura, se ela não tiver sido capturada ainda
            const captureRequest = (new CieloEcommerce(merchant, environment)).captureSale(paymentId, 15700, 0);
            return null;
            // E também podemos fazer seu cancelamento, se for o caso
            //$sale = (new CieloEcommerce($merchant, $environment)).cancelSale($paymentId, 15700);

        } catch (e) {
            // Em caso de erros de integração, podemos tratar o erro aqui.
            // os códigos de erro estão todos disponíveis no manual de integração.
            //$error = $e.getCieloError();
            throw e;
        }

    });
});

after(() => {
});