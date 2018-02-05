const should = require("should");
const Address = require("../lib/Ecommerce/Address").default;
const Customer = require("../lib/Ecommerce/Customer").default;


describe("Cielo - Customers tester", function () {
    it('Getters and Setters', function () {

        const customer = new Customer("Fulano");
        should(customer.address()).be.an.instanceOf(Address);
        should(customer.deliveryAddress()).be.an.instanceOf(Address);

        should(customer.getName()).be.eql("Fulano");

        should(customer.setName("Fulano de Tal")).be.eql("Fulano de Tal");
        should(customer.getName()).be.eql("Fulano de Tal");


        should(customer.setEmail("fulano@test.com")).be.an.instanceOf(Customer);
        should(customer.getEmail()).be.eql("fulano@test.com");

        should(customer.setBirthDate("1991-01-02")).be.an.instanceOf(Customer);
        should(customer.getBirthDate()).be.eql("1991-01-02");

        should(customer.setIdentity("11225468954")).be.an.instanceOf(Customer);
        should(customer.getIdentity()).be.eql("11225468954");

        should(customer.setIdentityType(Customer.PERSON)).be.an.instanceOf(Customer);
        should(customer.getIdentityType()).be.eql(Customer.PERSON);

        should(customer.setAddress()).be.an.instanceOf(Address);
        //should(customer.getAddress());

        should(customer.setDeliveryAddress()).be.an.instanceOf(Address);
        //should(customer.getDeliveryAddress());


    });

    it('Populate', function () {
        const shape = {
            Name: "Comprador crédito completo",
            Identity: "11225468954",
            IdentityType: "CPF",
            Email: "compradorteste@teste.com",
            Birthdate: "1991-01-02",
            Address: {
                "Street": "Rua Teste",
                "Number": "123",
                "Complement": "AP 123",
                "ZipCode": "12345987",
                "City": "Rio de Janeiro",
                "State": "RJ",
                "Country": "BRA"
            },
            DeliveryAddress: {
                "Street": "Rua Teste",
                "Number": "123",
                "Complement": "AP 123",
                "ZipCode": "12345987",
                "City": "Rio de Janeiro",
                "State": "RJ",
                "Country": "BRA"
            }
        };
        const customer = new Customer();

        should(customer.populate(shape)).be.an.instanceOf(Customer);
        should(customer.getName()).be.eql(shape.Name);
        should(customer.getEmail()).be.eql(shape.Email);
        should(customer.getBirthDate()).be.eql(shape.Birthdate);
        should(customer.getIdentity()).be.eql(shape.Identity);
        should(customer.getIdentityType()).be.eql(Customer.PERSON);


        should(customer.getAddress().getStreet()).be.eql(shape.Address.Street);
        should(customer.getAddress().getNumber()).be.eql(shape.Address.Number);
        should(customer.getAddress().getComplement()).be.eql(shape.Address.Complement);
        should(customer.getAddress().getZipCode()).be.eql(shape.Address.ZipCode);
        should(customer.getAddress().getCity()).be.eql(shape.Address.City);
        should(customer.getAddress().getState()).be.eql(shape.Address.State);
        should(customer.getAddress().getCountry()).be.eql(shape.Address.Country);

        should(customer.getDeliveryAddress().getStreet()).be.eql(shape.DeliveryAddress.Street);
        should(customer.getDeliveryAddress().getNumber()).be.eql(shape.DeliveryAddress.Number);
        should(customer.getDeliveryAddress().getComplement()).be.eql(shape.DeliveryAddress.Complement);
        should(customer.getDeliveryAddress().getZipCode()).be.eql(shape.DeliveryAddress.ZipCode);
        should(customer.getDeliveryAddress().getCity()).be.eql(shape.DeliveryAddress.City);
        should(customer.getDeliveryAddress().getState()).be.eql(shape.DeliveryAddress.State);
        should(customer.getDeliveryAddress().getCountry()).be.eql(shape.DeliveryAddress.Country);

    });

    it('toJSON', function () {


        const shape = {
            Name: "Comprador crédito completo",
            Identity: "11225468954",
            IdentityType: "CPF",
            Email: "compradorteste@teste.com",
            Birthdate: "1991-01-02",
            Address: {
                "Street": "Rua Teste",
                "Number": "123",
                "Complement": "AP 123",
                "ZipCode": "12345987",
                "City": "Rio de Janeiro",
                "State": "RJ",
                "Country": "BRA"
            },
            DeliveryAddress: {
                "Street": "Rua Teste",
                "Number": "123",
                "Complement": "AP 123",
                "ZipCode": "12345987",
                "City": "Rio de Janeiro",
                "State": "RJ",
                "Country": "BRA"
            }
        };
        const customer = (new Customer()).populate(shape);

        should(JSON.parse(JSON.stringify(customer))).be.eql(shape);

    });
});