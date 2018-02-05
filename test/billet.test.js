const should = require("should");
const moment = require('moment');
const Payment = require("./../lib/Ecommerce/Payment").default;
const Environment = require("./../lib/Ecommerce/Environment").default;
const Merchant = require("./../lib/Merchant").default;
const Sale = require("./../lib/Ecommerce/Sale").default;
const CieloEcommerce = require("./../lib/Ecommerce/CieloEcommerce").default;
describe("Your description", function () {
    it('Your test key', async function () {

        // ...
        // Configure o ambiente
        const environment = Environment::sandbox();

        // Configure seu merchant
        const merchant = new Merchant('MERCHANT ID', 'MERCHANT KEY');

        // Crie uma instância de Sale informando o ID do pedido na loja
        const sale = new Sale('123');

        // Crie uma instância de Customer informando o nome do cliente,
        // documento e seu endereço
        sale
            .customer('Fulano de Tal')
            .setIdentity('00000000001')
            .setIdentityType('CPF')
            .address()
            .setZipCode('22750012')
            .setCountry('BRA')
            .setState('RJ')
            .setCity('Rio de Janeiro')
            .setDistrict('Centro')
            .setStreet('Av Marechal Camara')
            .setNumber('123');

        // Crie uma instância de Payment informando o valor do pagamento
        sale
            .payment(15700)
            .setType(Payment::PAYMENTTYPE_BOLETO)
            .setAddress('Rua de Teste')
            .setBoletoNumber('1234')
            .setAssignor('Empresa de Teste')
            .setDemonstrative('Desmonstrative Teste')
            .setExpirationDate(moment().add(1, 'month').format('DD/MM/Y'))
            .setIdentification('11884926754')
            .setInstructions('Esse é um boleto de exemplo');

        // Crie o pagamento na Cielo
        try {
            // Configure o SDK com seu merchant e o ambiente apropriado para criar a venda
            const saleRequest = await (new CieloEcommerce(merchant, environment)).createSale(sale);

            // Com a venda criada na Cielo, já temos o ID do pagamento, TID e demais
            // dados retornados pela Cielo
            const paymentId = saleRequest.getPayment().getPaymentId();
            const boletoURL = saleRequest.getPayment().getUrl();

            console.log([paymentId, boletoURL]);
            return null;
        } catch (e) {
            // Em caso de erros de integração, podemos tratar o erro aqui.
            // os códigos de erro estão todos disponíveis no manual de integração.
            throw e;
        }
    });
});