export default class Address implements CieloSerializable {
    
    private street: string;
    private number: number;
    private complement: string;
    private zipCode: string;
    private city: string;
    private state : string;
    private country: string;
    private district: string;

    populate(data: Object): any{
        this.street = data.Address.Street;
        this.number = data.Address.Number;
        this.complement = data.Address.Complement;
        this.zipCode = data.Address.ZipCode;
        this.city = data.Address.City;
        this.state = data.Address.State;
        this.country = data.Address.Country;
        this.district = data.Address.District;
    }
    toJSON() {
        const fields: string[] = [
            "Street",
            "Number",
            "Complement",
            "ZipCode",
            "City",
            "State",
            "Country",
            "District"
        ];    

        let obj = {};

        fields.map( (field) => {

            const lcField = field.slice(0, 1).toLowerCase() + field.slice(1);
            if(this[lcField]){
                console.log(this['get' + field]() );
                obj[field] = this['get' + field]();
            }
        });

        return obj;

    }
    /**
     *
     * @returns {Street}
     */
    getStreet(): string {
        return this.street;
    }
    /**
     *
     * @param street
     * @returns Address
     */
    setStreet(street:string): Address{
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