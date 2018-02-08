const Sale = require("./../lib/Ecommerce/Sale").default;
const Customer = require("./../lib/Ecommerce/Customer").default;
const Payment = require("./../lib/Ecommerce/Payment").default;
const CreditCard = require("./../lib/Ecommerce/CreditCard").default;
const should = require("should");


describe("Cielo - Sale tester", function () {
    const shape = {
        "MerchantOrderId": "2014111701",
        "Customer": {
            "Name": "Comprador crédito completo",
            "Identity": "11225468954",
            "IdentityType": "CPF",
            "Email": "compradorteste@teste.com",
            "Birthdate": "1991-01-02",
            "Address": {
                "Street": "Rua Teste",
                "Number": "123",
                "Complement": "AP 123",
                "ZipCode": "12345987",
                "City": "Rio de Janeiro",
                "State": "RJ",
                "Country": "BRA"
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
        "Payment": {
            "Type": "CreditCard",
            "Amount": 15700,
            "ServiceTaxAmount": 0,
            "Installments": 1,
            "Interest": "ByMerchant",
            "Capture": true,
            "Authenticate": false,
            "SoftDescriptor": "123456789ABCD",
            "Currency": "BRL",
            "CreditCard": {
                "CardNumber": "4551870000000183",
                "Holder": "Teste Holder",
                "ExpirationDate": "12/2030",
                "SecurityCode": "123",
                "SaveCard": "false",
                "Brand": "Visa"
            }
        }
    };

    it('Getters and Setters', function () {
        const sale = new Sale(shape.MerchantOrderId);
        should(sale.getMerchantOrderId()).be.eql(shape.MerchantOrderId);

        const payment = sale.payment(sale.Payment);

        should(payment.getServiceTaxAmount()).be.eql(0);

        should(payment.getInstallments()).be.eql(1);

        should(payment.getInterest()).be.eql(shape.Payment.Interest);

        should(payment.getCapture()).be.eql(shape.Payment.Capture);

        should(payment.getAuthenticate()).be.eql(shape.Payment.Authenticate);

        should(payment.getCurrency()).be.eql(shape.Payment.Currency);

//should(payment.getRecurrentPayment()).be.eql();

        should(payment.getCreditCard()).be.an.instanceOf(CreditCard);

        should(payment.getCreditCard().getCardNumber()).be.eql(shape.Payment.CreditCard.CardNumber);

        should(payment.getCreditCard().getHolder()).be.eql(shape.Payment.CreditCard.Holder);

        should(payment.getCreditCard().getExpirationDate()).be.eql(shape.Payment.CreditCard.ExpirationDate);

        should(payment.getCreditCard().getSecurityCode()).be.eql(shape.Payment.CreditCard.SecurityCode);

        should(payment.getCreditCard().getSaveCard()).be.eql(shape.Payment.CreditCard.SaveCard);

        should(payment.getCreditCard().getBrand()).be.eql(CreditCard.VISA);

        should(payment.getType()).be.eql(Payment.PAYMENTTYPE_CREDITCARD);

        should(payment.getAmount()).be.eql(shape.Payment.Amount);

        const customer = sale.customer(shape.Customer.Name);

        should(customer.getName()).be.eql(shape.Customer.Name);

        should(customer.getEmail()).be.eql(shape.Customer.Email);

        should(customer.getBirthDate()).be.eql(shape.Customer.Birthdate);

        should(customer.getIdentity()).be.eql(shape.Customer.Identity);

        should(customer.getIdentityType()).be.eql(Customer.PERSON);

        const address = customer.address();

        should(address.getStreet()).be.eql(shape.Customer.Address.Street);
        should(address.getNumber()).be.eql(shape.Customer.Address.Number);
        should(address.getComplement()).be.eql(shape.Customer.Address.Complement);
        should(address.getZipCode()).be.eql(shape.Customer.Address.ZipCode);
        should(address.getCity()).be.eql(shape.Customer.Address.City);
        should(address.getState()).be.eql(shape.Customer.Address.State);
        should(address.getCountry()).be.eql(shape.Customer.Address.Country);
        should(address.getDistrict()).be.eql(shape.Customer.Address.District);

        const deliveryAddress = customer.deliveryAddress();

        should(deliveryAddress.getStreet()).be.eql(shape.Customer.DeliveryAddress.Street);
        should(deliveryAddress.getNumber()).be.eql(shape.Customer.DeliveryAddress.Number);
        should(deliveryAddress.getComplement()).be.eql(shape.Customer.DeliveryAddress.Complement);
        should(deliveryAddress.getZipCode()).be.eql(shape.Customer.DeliveryAddress.ZipCode);
        should(deliveryAddress.getCity()).be.eql(shape.Customer.DeliveryAddress.City);
        should(deliveryAddress.getState()).be.eql(shape.Customer.DeliveryAddress.State);
        should(deliveryAddress.getCountry()).be.eql(shape.Customer.DeliveryAddress.Country);
        should(deliveryAddress.getDistrict()).be.eql(shape.Customer.DeliveryAddress.District);

    });

    it('Populate', function () {
        const sale = (new Sale()).populate(shape);
        should(sale.getMerchantOrderId()).be.eql(shape.MerchantOrderId);

        const payment = sale.getPayment();

        should(payment.getServiceTaxAmount()).be.eql(0);

        should(payment.getInstallments()).be.eql(1);

        should(payment.getInterest()).be.eql(shape.Payment.Interest);

        should(payment.getCapture()).be.eql(shape.Payment.Capture);

        should(payment.getAuthenticate()).be.eql(shape.Payment.Authenticate);

        should(payment.getCurrency()).be.eql(shape.Payment.Currency);

//should(payment.getRecurrentPayment()).be.eql();

        should(payment.getCreditCard()).be.an.instanceOf(CreditCard);

        should(payment.getCreditCard().getCardNumber()).be.eql(shape.Payment.CreditCard.CardNumber);

        should(payment.getCreditCard().getHolder()).be.eql(shape.Payment.CreditCard.Holder);

        should(payment.getCreditCard().getExpirationDate()).be.eql(shape.Payment.CreditCard.ExpirationDate);

        should(payment.getCreditCard().getSecurityCode()).be.eql(shape.Payment.CreditCard.SecurityCode);

        should(payment.getCreditCard().getSaveCard()).be.eql(shape.Payment.CreditCard.SaveCard);

        should(payment.getCreditCard().getBrand()).be.eql(CreditCard.VISA);

        should(payment.getType()).be.eql(Payment.PAYMENTTYPE_CREDITCARD);

        should(payment.getAmount()).be.eql(shape.Payment.Amount);

        const customer = sale.getCustomer();

        should(customer.getName()).be.eql(shape.Customer.Name);

        should(customer.getEmail()).be.eql(shape.Customer.Email);

        should(customer.getBirthDate()).be.eql(shape.Customer.Birthdate);

        should(customer.getIdentity()).be.eql(shape.Customer.Identity);

        should(customer.getIdentityType()).be.eql(Customer.PERSON);

        const address = customer.getAddress();

        should(address.getStreet()).be.eql(shape.Customer.Address.Street);
        should(address.getNumber()).be.eql(shape.Customer.Address.Number);
        should(address.getComplement()).be.eql(shape.Customer.Address.Complement);
        should(address.getZipCode()).be.eql(shape.Customer.Address.ZipCode);
        should(address.getCity()).be.eql(shape.Customer.Address.City);
        should(address.getState()).be.eql(shape.Customer.Address.State);
        should(address.getCountry()).be.eql(shape.Customer.Address.Country);
        should(address.getDistrict()).be.eql(shape.Customer.Address.District);

        const deliveryAddress = customer.getDeliveryAddress();

        should(deliveryAddress.getStreet()).be.eql(shape.Customer.DeliveryAddress.Street);
        should(deliveryAddress.getNumber()).be.eql(shape.Customer.DeliveryAddress.Number);
        should(deliveryAddress.getComplement()).be.eql(shape.Customer.DeliveryAddress.Complement);
        should(deliveryAddress.getZipCode()).be.eql(shape.Customer.DeliveryAddress.ZipCode);
        should(deliveryAddress.getCity()).be.eql(shape.Customer.DeliveryAddress.City);
        should(deliveryAddress.getState()).be.eql(shape.Customer.DeliveryAddress.State);
        should(deliveryAddress.getCountry()).be.eql(shape.Customer.DeliveryAddress.Country);
        should(deliveryAddress.getDistrict()).be.eql(shape.Customer.DeliveryAddress.District);
    });

    it('toJSON', function () {
        const sale = (new Sale).populate(shape);

        should(JSON.parse(JSON.stringify(sale))).be.eql(shape);
    })

});