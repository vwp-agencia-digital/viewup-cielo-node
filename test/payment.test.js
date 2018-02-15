const should = require("should");

const Payment = require("../lib/Ecommerce/Payment").default;
const CreditCard = require("../lib/Ecommerce/CreditCard").default;
//const CieloRequestException = require('../lib/Ecommerce/Request/CieloRequestException');

const PAYMENTTYPE_CREDITCARD = 'CreditCard';
const PAYMENTTYPE_DEBITCARD = 'DebitCard';
const PAYMENTTYPE_ELECTRONIC_TRANSFER = 'ElectronicTransfer';
const PAYMENTTYPE_BOLETO = 'Boleto';
const PROVIDER_BRADESCO = 'Bradesco';
const PROVIDER_BANCO_DO_BRASIL = 'BancoDoBrasil';
const PROVIDER_SIMULADO = 'Simulado';

describe("Cielo - Payment tester", function () {

    const shape = {

        "Type": "CreditCard",
        "Amount": 15700,
        "ServiceTaxAmount": 0,
        "Installments": 1,
        "Interest": "ByMerchant",
        "Capture": true,
        "Authenticate": false,
        "SoftDescriptor": "123456789ABCD",
        "CreditCard": {
            "CardNumber": "4551870000000183",
            "Holder": "Teste Holder",
            "ExpirationDate": "12/2030",
            "SecurityCode": "123",
            "SaveCard": false,
            "Brand": "Visa"
        },
        "CapturedAmount": 15700,
        "ProofOfSale": "674532",
        "Tid": "0305023644309",
        "AuthorizationCode": "123456",
        "PaymentId": "24bc8366-fc31-4d6c-8555-17049a836a07",
        "Currency": "BRL",
        "Country": "BRA",
        "ExtraDataCollection": [],
        "Status": 1,
        "ReturnCode": "4",
        "ReturnMessage": "Operation Successful",
        "Instructions": "Aceitar somente até a data de vencimento, após essa data juros de 1% dia.",
        "ExpirationDate": "2015-01-05",
        "Url": "https://apisandbox.cieloecommerce.cielo.com.br/post/pagador/reenvia.asp/a5f3181d-c2e2-4df9-a5b4-d8f6edf6bd51",
        "Number": "123-2",
        "BarCodeNumber": "00096629900000157000494250000000012300656560",
        "DigitableLine": "00090.49420 50000.000013 23006.565602 6 62990000015700",
        "Assignor": "Empresa Teste",
        "Address": "Rua Teste",
        "Identification": "11884926754",
        "Provider": "Bradesco",
        "Links": [
            {
                "Method": "GET",
                "Rel": "self",
                "Href": "https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}"
            },
            {
                "Method": "PUT",
                "Rel": "capture",
                "Href": "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}/capture"
            },
            {
                "Method": "PUT",
                "Rel": "void",
                "Href": "https://apisandbox.cieloecommerce.cielo.com.br/1/sales/{PaymentId}/void"
            }
        ]

    };

    it('Constants', function () {
        should(Payment.PAYMENTTYPE_CREDITCARD).be.eql(PAYMENTTYPE_CREDITCARD);
        should(Payment.PAYMENTTYPE_DEBITCARD).be.eql(PAYMENTTYPE_DEBITCARD);
        should(Payment.PAYMENTTYPE_ELECTRONIC_TRANSFER).be.eql(PAYMENTTYPE_ELECTRONIC_TRANSFER);
        should(Payment.PAYMENTTYPE_BOLETO).be.eql(PAYMENTTYPE_BOLETO);
        should(Payment.PROVIDER_BRADESCO).be.eql(PROVIDER_BRADESCO);
        should(Payment.PROVIDER_BANCO_DO_BRASIL).be.eql(PROVIDER_BANCO_DO_BRASIL);
        should(Payment.PROVIDER_SIMULADO).be.eql(PROVIDER_SIMULADO);
    });


    it('Getters and Setters', function () {

        const payment = new Payment();

        should(payment.creditCard("123", CreditCard.VISA)).be.an.instanceOf(CreditCard);

        should(payment.newCard("123", CreditCard.VISA)).be.an.instanceOf(CreditCard);

        should(payment.setServiceTaxAmount(1500)).be.an.instanceOf(Payment);
        should(payment.getServiceTaxAmount()).be.eql(1500);

        should(payment.setInstallments(2)).be.an.instanceOf(Payment);
        should(payment.getInstallments()).be.eql(2);

        should(payment.setInterest(1500)).be.an.instanceOf(Payment);
        should(payment.getInterest()).be.eql(1500);

        should(payment.setCapture(shape.Capture)).be.an.instanceOf(Payment);
        should(payment.getCapture()).be.eql(shape.Capture);

        should(payment.setAuthenticate(shape.Authenticate)).be.an.instanceOf(Payment);
        should(payment.getAuthenticate()).be.eql(shape.Authenticate);

        should(payment.setRecurrent(shape.Currency)).be.an.instanceOf(Payment);
        should(payment.getRecurrent()).be.eql(shape.Currency);

        //should(payment.setRecurrentPayment(shape.Payment)).be.an.instanceOf(Payment);
        //should(payment.getRecurrentPayment()).be.eql();

        should(payment.setCreditCard(shape.CreditCard)).be.an.instanceOf(Payment);
        should(payment.getCreditCard()).be.an.instanceOf(CreditCard);

        should(payment.getCreditCard().getCardNumber()).be.eql(shape.CreditCard.CardNumber);

        should(payment.getCreditCard().getHolder()).be.eql(shape.CreditCard.Holder);

        should(payment.getCreditCard().getExpirationDate()).be.eql(shape.CreditCard.ExpirationDate);

        should(payment.getCreditCard().getSecurityCode()).be.eql(shape.CreditCard.SecurityCode);

        should(payment.getCreditCard().getSaveCard()).be.eql(shape.CreditCard.SaveCard);

        should(payment.getCreditCard().getBrand()).be.eql(CreditCard.VISA);

        //should(payment.setDebitCard()).be.an.instanceOf(Payment);
        //should(payment.getDebitCard()).be.eql();

        //should(payment.setAuthenticationUrl()).be.an.instanceOf(Payment);
        //should(payment.getAuthenticationUrl()).be.eql();

        should(payment.setTid(shape.Tid)).be.an.instanceOf(Payment);
        should(payment.getTid()).be.eql(shape.Tid);

        should(payment.setProofOfSale(shape.ProofOfSale)).be.an.instanceOf(Payment);
        should(payment.getProofOfSale()).be.eql(shape.ProofOfSale);

        should(payment.setAuthorizationCode(shape.AuthorizationCode)).be.an.instanceOf(Payment);
        should(payment.getAuthorizationCode()).be.eql(shape.AuthorizationCode);

        should(payment.setSoftDescriptor(shape.SoftDescriptor)).be.an.instanceOf(Payment);
        should(payment.getSoftDescriptor()).be.eql(shape.SoftDescriptor);

        //should(payment.setReturnUrl()).be.an.instanceOf(Payment);
        //should(payment.getReturnUrl()).be.eql();


        should(payment.setPaymentId(shape.PaymentId)).be.an.instanceOf(Payment);
        should(payment.getPaymentId()).be.eql(shape.PaymentId);

        should(payment.setType(shape.Type)).be.an.instanceOf(Payment);
        should(payment.getType()).be.eql(shape.Type);

        should(payment.setAmount(shape.Amount)).be.an.instanceOf(Payment);
        should(payment.getAmount()).be.eql(shape.Amount);

        //should(payment.setReceivedDate(shape.)).be.an.instanceOf(Payment);
        //should(payment.getReceivedDate()).be.eql();

        should(payment.setCapturedAmount(shape.CapturedAmount)).be.an.instanceOf(Payment);
        should(payment.getCapturedAmount()).be.eql(shape.CapturedAmount);
        //
        //should(payment.setCapturedDate()).be.an.instanceOf(Payment);
        //should(payment.getCapturedDate()).be.eql();

        //should(payment.setVoidedAmount()).be.an.instanceOf(Payment);
        //should(payment.getVoidedAmount()).be.eql();

        //should(payment.setVoidedDate()).be.an.instanceOf(Payment);
        //should(payment.getVoidedDate()).be.eql();

        should(payment.setCurrency(shape.Currency)).be.an.instanceOf(Payment);
        should(payment.getCurrency()).be.eql(shape.Currency);

        should(payment.setCountry(shape.Country)).be.an.instanceOf(Payment);
        should(payment.getCountry()).be.eql(shape.Country);

        should(payment.setReturnCode(shape.ReturnCode)).be.an.instanceOf(Payment);
        should(payment.getReturnCode()).be.eql(shape.ReturnCode);

        should(payment.setReturnMessage(shape.ReturnMessage)).be.an.instanceOf(Payment);
        should(payment.getReturnMessage()).be.eql(shape.ReturnMessage);

        should(payment.setStatus(shape.Status)).be.an.instanceOf(Payment);
        should(payment.getStatus()).be.eql(shape.Status);

        should(payment.setLinks(shape.Links)).be.an.instanceOf(Payment);
        should(payment.getLinks()).be.eql(shape.Links);

        //should(payment.setExtraDataCollection()).be.an.instanceOf(Payment);
        //should(payment.getExtraDataCollection()).be.eql();

        should(payment.setExpirationDate(shape.ExpirationDate)).be.an.instanceOf(Payment);
        should(payment.getExpirationDate()).be.eql(shape.ExpirationDate);

        should(payment.setUrl(shape.Url)).be.an.instanceOf(Payment);
        should(payment.getUrl()).be.eql(shape.Url);

        should(payment.setNumber(shape.Number)).be.an.instanceOf(Payment);
        should(payment.getNumber()).be.eql(shape.Number);

        //should(payment.setBoletoNumber(shape.)).be.an.instanceOf(Payment);
        //should(payment.getBoletoNumber()).be.eql();

        should(payment.setProvider(shape.Provider)).be.an.instanceOf(Payment);
        should(payment.getProvider()).be.eql(shape.Provider);

        should(payment.setBarCodeNumber(shape.BarCodeNumber)).be.an.instanceOf(Payment);
        should(payment.getBarCodeNumber()).be.eql(shape.BarCodeNumber);

        should(payment.setDigitableLine(shape.DigitableLine)).be.an.instanceOf(Payment);
        should(payment.getDigitableLine()).be.eql(shape.DigitableLine);

        should(payment.setAddress(shape.Address)).be.an.instanceOf(Payment);
        should(payment.getAddress()).be.eql(shape.Address);

        should(payment.setAssignor(shape.Assignor)).be.an.instanceOf(Payment);
        should(payment.getAssignor()).be.eql(shape.Assignor);

        //should(payment.setDemonstrative(shape.)).be.an.instanceOf(Payment);
        //should(payment.getDemonstrative()).be.eql();

        should(payment.setIdentification(shape.Identification)).be.an.instanceOf(Payment);
        should(payment.getIdentification()).be.eql(shape.Identification);

        should(payment.setInstructions(shape.Instructions)).be.an.instanceOf(Payment);
        should(payment.getInstructions()).be.eql(shape.Instructions);

    });

    it('Populate', function () {

        const payment = (new Payment).populate(shape);

        should(payment.getServiceTaxAmount()).be.eql(0);

        should(payment.getInstallments()).be.eql(1);

        should(payment.getInterest()).be.eql(shape.Interest);

        should(payment.getCapture()).be.eql(shape.Capture);

        should(payment.getAuthenticate()).be.eql(shape.Authenticate);

        should(payment.getCurrency()).be.eql(shape.Currency);

//should(payment.getRecurrentPayment()).be.eql();

        should(payment.getCreditCard()).be.an.instanceOf(CreditCard);

        should(payment.getCreditCard().getCardNumber()).be.eql(shape.CreditCard.CardNumber);

        should(payment.getCreditCard().getHolder()).be.eql(shape.CreditCard.Holder);

        should(payment.getCreditCard().getExpirationDate()).be.eql(shape.CreditCard.ExpirationDate);

        should(payment.getCreditCard().getSecurityCode()).be.eql(shape.CreditCard.SecurityCode);

        should(payment.getCreditCard().getSaveCard()).be.eql(shape.CreditCard.SaveCard);

        should(payment.getCreditCard().getBrand()).be.eql(CreditCard.VISA);

//should(payment.getDebitCard()).be.eql();

//should(payment.getAuthenticationUrl()).be.eql();

        should(payment.getTid()).be.eql(shape.Tid);

        should(payment.getProofOfSale()).be.eql(shape.ProofOfSale);

        should(payment.getAuthorizationCode()).be.eql(shape.AuthorizationCode);

        should(payment.getSoftDescriptor()).be.eql(shape.SoftDescriptor);

//should(payment.getReturnUrl()).be.eql();

        should(payment.getPaymentId()).be.eql(shape.PaymentId);

        should(payment.getType()).be.eql(shape.Type);

        should(payment.getAmount()).be.eql(shape.Amount);

//should(payment.getReceivedDate()).be.eql();

        should(payment.getCapturedAmount()).be.eql(shape.CapturedAmount);

//should(payment.getCapturedDate()).be.eql();

//should(payment.getVoidedAmount()).be.eql();

//should(payment.getVoidedDate()).be.eql();

        should(payment.getCurrency()).be.eql(shape.Currency);

        should(payment.getCountry()).be.eql(shape.Country);

        should(payment.getReturnCode()).be.eql(shape.ReturnCode);

        should(payment.getReturnMessage()).be.eql(shape.ReturnMessage);

        should(payment.getStatus()).be.eql(shape.Status);

        should(payment.getLinks()).be.eql(shape.Links);

//should(payment.getExtraDataCollection()).be.eql();

        should(payment.getExpirationDate()).be.eql(shape.ExpirationDate);

        should(payment.getUrl()).be.eql(shape.Url);

        should(payment.getNumber()).be.eql(shape.Number);

//should(payment.getBoletoNumber()).be.eql();

        should(payment.getProvider()).be.eql(shape.Provider);

        should(payment.getBarCodeNumber()).be.eql(shape.BarCodeNumber);

        should(payment.getDigitableLine()).be.eql(shape.DigitableLine);

        should(payment.getAddress()).be.eql(shape.Address);

        should(payment.getAssignor()).be.eql(shape.Assignor);

//should(payment.getDemonstrative()).be.eql();

        should(payment.getIdentification()).be.eql(shape.Identification);

        should(payment.getInstructions()).be.eql(shape.Instructions);


    });

    it('toJSON', function () {
        const payment = (new Payment()).populate(shape);

        should(JSON.parse(JSON.stringify(payment))).be.eql(shape);
    })

});

