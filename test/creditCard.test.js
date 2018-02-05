const {Customer, Environment, Payment, Sale} = require("../lib/Ecommerce").Ecommerce;
const Merchant = require("../lib/Merchant").default;
const CreditCard = require("./../lib/Ecommerce/CreditCard").default;
const should = require("should");


/**
 * Bandeira Visa
 */
const VISA = 'Visa';
/**
 * Bandeira Mastercard
 */
const MASTERCARD = 'Master';
/**
 * Bandeira American Express
 */
const AMEX = 'Amex';
/**
 * Bandeira ELO
 */
const ELO = 'Elo';
/**
 * Bandeira Aura
 */
const AURA = 'Aura';
/**
 * Bandeira JCB
 */
const JCB = 'JCB';
/**
 * Bandeira Diners
 */
const DINERS = 'Diners';
/**
 * Bandeira Discover
 */
const DISCOVER = 'Discover';
/**
 * Bandeira Hipercard
 */
const HIPERCARD = 'Hipercard';


describe("Cielo - Credit Card Tester", function () {
    it('Contants', function () {
        should(CreditCard.VISA).be.eql(VISA);
        should(CreditCard.MASTERCARD).be.eql(MASTERCARD);
        should(CreditCard.AMEX).be.eql(AMEX);
        should(CreditCard.ELO).be.eql(ELO);
        should(CreditCard.AURA).be.eql(AURA);
        should(CreditCard.JCB).be.eql(JCB);
        should(CreditCard.DINERS).be.eql(DINERS);
        should(CreditCard.DISCOVER).be.eql(DISCOVER);
        should(CreditCard.HIPERCARD).be.eql(HIPERCARD);
    });
    it('Getters and Setters', function () {
        const creditCard = new CreditCard();


        should(creditCard.setCardNumber("0000000000000001")).be.an.instanceOf(CreditCard);
        should(creditCard.getCardNumber());


        should(creditCard.setHolder("Fulano de Tal")).be.an.instanceOf(CreditCard);
        should(creditCard.getHolder()).be.eql("Fulano de Tal");

        should(creditCard.setExpirationDate("12/2030")).be.an.instanceOf(CreditCard);
        should(creditCard.getExpirationDate()).be.eql("12/2030");

        should(creditCard.setSecurityCode("123")).be.an.instanceOf(CreditCard);
        should(creditCard.getSecurityCode()).be.eql("123");

        should(creditCard.setSaveCard(true)).be.an.instanceOf(CreditCard);
        should(creditCard.getSaveCard()).be.eql(true);

        should(creditCard.setBrand(CreditCard.VISA)).be.an.instanceOf(CreditCard);
        should(creditCard.getBrand()).be.eql(CreditCard.VISA);

        // TODO
        //should(creditCard.setCardToken($cardToken)).be.an.instanceOf(CreditCard);
        //should(creditCard.getCardToken()).be.an.instanceOf(CreditCard);

        // TODO
        //should(creditCard.setCustomerName($customerName)).be.an.instanceOf(CreditCard);
        //should(creditCard.getCustomerName()).be.an.instanceOf(CreditCard);

        should(creditCard.setLinks(["link_1", "link_2"])).be.an.instanceOf(CreditCard);
        should(creditCard.getLinks()).be.eql(["link_1", "link_2"]);
    });
    it('Populate', function () {
        const creditCard = new CreditCard();
        const shape = {
            "CardNumber": "4551870000000183",
            "Holder": "Teste Holder",
            "ExpirationDate": "12/2030",
            "SecurityCode": "123",
            "SaveCard": false,
            "Brand": "Visa"
        };
        should(creditCard.populate(shape)).be.an.instanceOf(CreditCard);

        should(creditCard.getCardNumber()).be.eql(shape.CardNumber);

        should(creditCard.getHolder()).be.eql(shape.Holder);

        should(creditCard.getExpirationDate()).be.eql(shape.ExpirationDate);

        should(creditCard.getSecurityCode()).be.eql(shape.SecurityCode);

        should(creditCard.getSaveCard()).be.eql(shape.SaveCard);

        should(creditCard.getBrand()).be.eql(CreditCard.VISA);

        //should(creditCard.getLinks()).be.eql(["link_1", "link_2"]);

    });
    it('toJSON', function () {
        const creditCard = new CreditCard();

        creditCard
            .setCardNumber("0000000000000001")
            .setExpirationDate("12/2030")
            .setHolder("Fulano de Tal")
            .setBrand(CreditCard.VISA)
            .setSecurityCode("123")
            .setSaveCard(true);

        const card = JSON.parse(JSON.stringify(creditCard, null, 4));
        should(card.CardNumber).be.eql("0000000000000001");
        should(card.ExpirationDate).be.eql("12/2030");
        should(card.Holder).be.eql("Fulano de Tal");
        should(card.Brand).be.eql(CreditCard.VISA);
        should(card.SecurityCode).be.eql("123");
        should(card.SaveCard).be.eql(true);
    });

    it('Create Payment', function () {
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
            const saleRequest = await(new CieloEcommerce(merchant, environment)).createSale(sale);

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

    })
});