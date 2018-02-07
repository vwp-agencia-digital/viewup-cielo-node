const Address = require('../lib/Ecommerce/Address').default;
const should = require("should");

describe("Cielo - Address tester", function () {
    const shape = {
        Address: {
            "Street": "Rua Teste",
            "Number": "123",
            "Complement": "AP 123",
            "ZipCode": "12345987",
            "City": "Rio de Janeiro",
            "State": "RJ",
            "Country": "BRA",
            "District": "AV. Olegario Maciel"
        },
    };
    it('Getters and Setters', function () {
        const address = new Address();


        should(address.setStreet(shape.Address.Street)).be.an.instanceOf(Address);
        should(address.getStreet()).be.eql(shape.Address.Street);

        should(address.setNumber(shape.Address.Number)).be.an.instanceOf(Address);
        should(address.getNumber()).be.eql(shape.Address.Number);

        should(address.setComplement(shape.Address.Complement)).be.an.instanceOf(Address);
        should(address.getComplement()).be.eql(shape.Address.Complement);

        should(address.setZipCode(shape.Address.ZipCode)).be.an.instanceOf(Address);
        should(address.getZipCode()).be.eql(shape.Address.ZipCode);

        should(address.setCity(shape.Address.City)).be.an.instanceOf(Address);
        should(address.getCity()).be.eql(shape.Address.City);

        should(address.setState(shape.Address.State)).be.an.instanceOf(Address);
        should(address.getState()).be.eql(shape.Address.State);

        should(address.setCountry(shape.Address.Country)).be.an.instanceOf(Address);
        should(address.getCountry()).be.eql(shape.Address.Country);

        should(address.setDistrict(shape.Address.District)).be.an.instanceOf(Address);
        should(address.getDistrict()).be.eql(shape.Address.District);
    });
    it('Populate', function () {
        const address = new Address;
        address.populate(shape);
        should(address.getStreet()).be.eql(shape.Address.Street);
        should(address.getNumber()).be.eql(shape.Address.Number);
        should(address.getComplement()).be.eql(shape.Address.Complement);
        should(address.getZipCode()).be.eql(shape.Address.ZipCode);
        should(address.getCity()).be.eql(shape.Address.City);
        should(address.getState()).be.eql(shape.Address.State);
        should(address.getCountry()).be.eql(shape.Address.Country);
        should(address.getDistrict()).be.eql(shape.Address.District);

    });

    it('toJSON', function () {
        const address = new Address();

        should(address.setStreet(shape.Address.Street)).be.an.instanceOf(Address);
        should(address.setNumber(shape.Address.Number)).be.an.instanceOf(Address);
        should(address.setComplement(shape.Address.Complement)).be.an.instanceOf(Address);
        should(address.setZipCode(shape.Address.ZipCode)).be.an.instanceOf(Address);
        should(address.setCity(shape.Address.City)).be.an.instanceOf(Address);
        should(address.setState(shape.Address.State)).be.an.instanceOf(Address);
        should(address.setCountry(shape.Address.Country)).be.an.instanceOf(Address);
        should(address.setDistrict(shape.Address.District)).be.an.instanceOf(Address);

        should(JSON.parse(JSON.stringify(address))).match(shape.Address);

    })

});
