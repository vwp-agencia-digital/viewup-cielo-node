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
    it('Constants', function () {
        should(Payment.PAYMENTTYPE_CREDITCARD).be.eql(PAYMENTTYPE_CREDITCARD);
        should(Payment.PAYMENTTYPE_DEBITCARD).be.eql(PAYMENTTYPE_DEBITCARD);
        should(Payment.PAYMENTTYPE_ELECTRONIC_TRANSFER).be.eql(PAYMENTTYPE_ELECTRONIC_TRANSFER);
        should(Payment.PAYMENTTYPE_BOLETO).be.eql(PAYMENTTYPE_BOLETO);
        should(Payment.PROVIDER_BRADESCO).be.eql(PROVIDER_BRADESCO);
        should(Payment.PROVIDER_BANCO_DO_BRASIL).be.eql(PROVIDER_BANCO_DO_BRASIL);
        should(Payment.PROVIDER_SIMULADO).be.eql(PROVIDER_SIMULADO);
    });


    it('Getters and Setters', async function () {

        const payment = new Payment();

        should(payment.creditCard()).be.an.instanceOf(CreditCard);

        should(payment.newCard()).be.an.instanceOf(CreditCard);

        should(payment.setServiceTaxAmount(150000)).be.an.instanceOf(Payment);
        should(payment.getServiceTaxAmount()).be.eql(150000);

        should(payment.setInstallments(2)).be.an.instanceOf(Payment);
        should(payment.getInstallments()).be.eql(2);

        should(payment.setInterest(1500)).be.an.instanceOf(Payment);
        should(payment.getInterest()).be.eql(1500);

        should(payment.setCapture()).be.an.instanceOf(Payment);
        should(payment.getCapture()).be.eql();

        should(payment.setAuthenticate()).be.an.instanceOf(Payment);
        should(payment.getAuthenticate()).be.eql();

        should(payment.setRecurrent()).be.an.instanceOf(Payment);
        should(payment.getRecurrent()).be.eql();

        should(payment.setRecurrentPayment()).be.an.instanceOf(Payment);
        should(payment.getRecurrentPayment()).be.eql();

        should(payment.setCreditCard()).be.an.instanceOf(Payment);
        should(payment.getCreditCard()).be.eql();

        should(payment.setDebitCard()).be.an.instanceOf(Payment);
        should(payment.getDebitCard()).be.eql();

        should(payment.setAuthenticationUrl()).be.an.instanceOf(Payment);
        should(payment.getAuthenticationUrl()).be.eql();

        should(payment.setTid()).be.an.instanceOf(Payment);
        should(payment.getTid()).be.eql();

        should(payment.setProofOfSale()).be.an.instanceOf(Payment);
        should(payment.getProofOfSale()).be.eql();

        should(payment.setAuthorizationCode()).be.an.instanceOf(Payment);
        should(payment.getAuthorizationCode()).be.eql();

        should(payment.setSoftDescriptor()).be.an.instanceOf(Payment);
        should(payment.getSoftDescriptor()).be.eql();

        should(payment.setReturnUrl()).be.an.instanceOf(Payment);
        should(payment.getReturnUrl()).be.eql();

        should(payment.setProvider()).be.an.instanceOf(Payment);
        should(payment.getProvider()).be.eql();

        should(payment.setPaymentId()).be.an.instanceOf(Payment);
        should(payment.getPaymentId()).be.eql();

        should(payment.setType()).be.an.instanceOf(Payment);
        should(payment.getType()).be.eql();

        should(payment.setAmount()).be.an.instanceOf(Payment);
        should(payment.getAmount()).be.eql();

        should(payment.setReceivedDate()).be.an.instanceOf(Payment);
        should(payment.getReceivedDate()).be.eql();

        should(payment.setCapturedAmount()).be.an.instanceOf(Payment);
        should(payment.getCapturedAmount()).be.eql();

        should(payment.setCapturedDate()).be.an.instanceOf(Payment);
        should(payment.getCapturedDate()).be.eql();

        should(payment.setVoidedAmount()).be.an.instanceOf(Payment);
        should(payment.getVoidedAmount()).be.eql();

        should(payment.setVoidedDate()).be.an.instanceOf(Payment);
        should(payment.getVoidedDate()).be.eql();

        should(payment.setCurrency()).be.an.instanceOf(Payment);
        should(payment.getCurrency()).be.eql();

        should(payment.setCountry()).be.an.instanceOf(Payment);
        should(payment.getCountry()).be.eql();

        should(payment.setReturnCode()).be.an.instanceOf(Payment);
        should(payment.getReturnCode()).be.eql();

        should(payment.setReturnMessage()).be.an.instanceOf(Payment);
        should(payment.getReturnMessage()).be.eql();

        should(payment.setStatus()).be.an.instanceOf(Payment);
        should(payment.getStatus()).be.eql();

        should(payment.setLinks()).be.an.instanceOf(Payment);
        should(payment.getLinks()).be.eql();

        should(payment.setExtraDataCollection()).be.an.instanceOf(Payment);
        should(payment.getExtraDataCollection()).be.eql();

        should(payment.setExpirationDate()).be.an.instanceOf(Payment);
        should(payment.getExpirationDate()).be.eql();

        should(payment.setUrl()).be.an.instanceOf(Payment);
        should(payment.getUrl()).be.eql();

        should(payment.setNumber()).be.an.instanceOf(Payment);
        should(payment.getNumber()).be.eql();

        should(payment.setBoletoNumber()).be.an.instanceOf(Payment);
        should(payment.getBoletoNumber()).be.eql();

        should(payment.setBarCodeNumber()).be.an.instanceOf(Payment);
        should(payment.getBarCodeNumber()).be.eql();

        should(payment.setDigitableLine()).be.an.instanceOf(Payment);
        should(payment.getDigitableLine()).be.eql();

        should(payment.setAddress()).be.an.instanceOf(Payment);
        should(payment.getAddress()).be.eql();

        should(payment.setAssignor()).be.an.instanceOf(Payment);
        should(payment.getAssignor()).be.eql();

        should(payment.setDemonstrative()).be.an.instanceOf(Payment);
        should(payment.getDemonstrative()).be.eql();

        should(payment.setIdentification()).be.an.instanceOf(Payment);
        should(payment.getIdentification()).be.eql();

        should(payment.setInstructions()).be.an.instanceOf(Payment);
        should(payment.getInstructions()).be.eql();

    });
});

