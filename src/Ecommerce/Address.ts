export default class Address implements CieloSerializable {
    street ?: String;
    number ?: Number;
    complement ?: String;
    zipCode ?: String;
    city ?: String;
    state ?: String;
    country ?: String;
    district ?: String;
    populate(data ?: any): any {
        this.street = data.Street;
        this.number = data.Number;
        this.complement = data.Complement;
        this.zipCode = data.ZipCode;
        this.city = data.City;
        this.state = data.State;
        this.country = data.Country;
        this.district = data.District;
    }
    toJSON() {
        return {
                "Street": this.getStreet(),
                "Number": this.getNumber(),
                "Complement": this.getComplement(),
                "ZipCode": this.getZipCode(),
                "City": this.getCity(),
                "State": this.getState(),
                "Country": this.getCountry(),
                "District": this.getDistrict()
            };
    }
    /**
     *
     * @returns {Street}
     */
    getStreet(): any {
        return this.street;
    }
    /**
     *
     * @param street
     * @returns Address
     */
    setStreet(street ?: any): any {
        this.street = street;
        return this;
    }

    /**
     *
     * @returns Number
     */
    getNumber(): any {
        return this.number;
    }

    /**
     *
     * @param number
     * @returns Address
     */
    setNumber(number ?: any): any {
        this.number = number;
        return this;
    }

    /**
     *
     * @returns Complement
     */
    getComplement(): any {
        return this.complement;
    }

    /**
     *
     * @param complement
     * @returns {any}
     */
    setComplement(complement ?: any): any {
        this.complement = complement;
        return this;
    }
    /**
     *
     * @returns {any}
     */
    getZipCode(): any {
        return this.zipCode;
    }

    /**
     *
     * @param zipCode
     * @returns {any}
     */
    setZipCode(zipCode ?: any): any {
        this.zipCode = zipCode;
        return this;
    }

    /**
     *
     * @returns {any}
     */
    getCity(): any {
        return this.city;
    }

    /**
     *
     * @param city
     * @returns {any}
     */
    setCity(city ?: any): any {
        this.city = city;
        return this;
    }

    /**
     *
     * @returns {any}
     */
    getState(): any {
        return this.state;
    }

    /**
     *
     * @param state
     * @returns {any}
     */
    setState(state ?: any): any {
        this.state = state;
        return this;
    }

    /**
     *
     * @returns {any}
     */
    getCountry(): any {
        return this.country;
    }

    /**
     *
     * @param state
     * @returns {any}
     */
    setCountry(country ?: any): any {
        this.country = country;
        return this;
    }

    /**
     *
     * @returns {any}
     */
    getDistrict(): any {
        return this.district;
    }

    /**
     *
     * @param district
     * @returns {any}
     */
    setDistrict(district ?: any): any {
        this.district = district;
        return this;
    }


}