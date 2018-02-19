"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Address {
    constructor() {
        this.street = "";
        this.number = "";
        this.complement = "";
        this.zipCode = "";
        this.city = "";
        this.state = "";
        this.country = "";
        this.district = "";
    }
    populate(data) {
        data.Address = data.Address || data;
        this.street = data.Address.Street;
        this.number = data.Address.Number;
        this.complement = data.Address.Complement;
        this.zipCode = data.Address.ZipCode;
        this.city = data.Address.City;
        this.state = data.Address.State;
        this.country = data.Address.Country;
        this.district = data.Address.District;
        return this;
    }
    toJSON() {
        const data = {
            Street: this.getStreet(),
            Number: this.getNumber(),
            Complement: this.getComplement(),
            ZipCode: this.getZipCode(),
            City: this.getCity(),
            State: this.getState(),
            Country: this.getCountry(),
            District: this.getDistrict()
        };
        for (const i in data) {
            if (!data[i] && data.hasOwnProperty(i)) {
                delete data[i];
            }
        }
        return data;
    }
    /**
     *
     * @returns {Street}
     */
    getStreet() {
        return this.street;
    }
    /**
     *
     * @param street
     * @returns Address
     */
    setStreet(street) {
        this.street = street;
        return this;
    }
    /**
     *
     * @returns Number
     */
    getNumber() {
        return this.number;
    }
    /**
     *
     * @param number
     * @returns Address
     */
    setNumber(number) {
        this.number = number;
        return this;
    }
    /**
     *
     * @returns Complement
     */
    getComplement() {
        return this.complement;
    }
    /**
     *
     * @param complement
     * @returns {any}
     */
    setComplement(complement) {
        this.complement = complement;
        return this;
    }
    /**
     *
     * @returns {any}
     */
    getZipCode() {
        return this.zipCode;
    }
    /**
     *
     * @param zipCode
     * @returns {any}
     */
    setZipCode(zipCode) {
        this.zipCode = zipCode;
        return this;
    }
    /**
     *
     * @returns {any}
     */
    getCity() {
        return this.city;
    }
    /**
     *
     * @param city
     * @returns {any}
     */
    setCity(city) {
        this.city = city;
        return this;
    }
    /**
     *
     * @returns {any}
     */
    getState() {
        return this.state;
    }
    /**
     *
     * @param state
     * @returns {any}
     */
    setState(state) {
        this.state = state;
        return this;
    }
    /**
     *
     * @returns {any}
     */
    getCountry() {
        return this.country;
    }
    /**
     *
     * @param state
     * @returns {any}
     */
    setCountry(country) {
        this.country = country;
        return this;
    }
    /**
     *
     * @returns {any}
     */
    getDistrict() {
        return this.district;
    }
    /**
     *
     * @param district
     * @returns {any}
     */
    setDistrict(district) {
        this.district = district;
        return this;
    }
}
exports.default = Address;
