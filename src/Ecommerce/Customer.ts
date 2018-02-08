import Address from "./Address";
import {Key} from "readline";

export default class Customer implements CieloSerializable {

    private _name?: string | any;
    private _email?: string | any;
    private _birthdate?: string | any;
    private _identity?: string | any;
    private _identityType?: string | any;
    private _address?: Address | any;
    private _deliveryAddress?: Address | any;

    [key: string]: string | Address | any;

    static readonly PERSON: string = "CPF";

    constructor(name: string) {
        this._name = name;
        this._address = new Address();
        this._deliveryAddress = new Address();
    }

    address(): Address | undefined {
        if (!this._address) {
            this.setAddress(new Address());
        }
        return this.getAddress();
    }

    deliveryAddress(): Address | undefined{
        if (!this._deliveryAddress) {
            this.setDeliveryAddress(new Address());
        }
        return this.getDeliveryAddress();
    }

    getName(): string {
        return this._name;
    }

    setName(name: string): string {
        this._name = name;
        return this._name;
    }

    getEmail(): string {
        return this._email;
    }

    setEmail(email: string): Customer {
        this._email = email;
        return this;
    }

    setBirthDate(date: string): Customer {
        this._birthdate = date;
        return this;
    }

    getBirthDate() {
        return this._birthdate;
    }

    setIdentity(identity: string): Customer {
        this._identity = identity;
        return this;
    }

    getIdentity(): string {
        return this._identity;
    }

    setIdentityType(identityType: string): Customer {
        this._identityType = identityType;
        return this;
    }

    getIdentityType(): string {
        return this._identityType;
    }

    setAddress(address: Address = new Address()): Address {
        this._address = address;
        return this._address;
    }

    getAddress(): Address | undefined {
        return this._address;
    }

    setDeliveryAddress(address: Address = new Address()): Address {
        this._deliveryAddress = address;
        return this._deliveryAddress;
    }

    getDeliveryAddress(): Address | undefined {
        return this._deliveryAddress;
    }


    toJSON() {
        return {
            "Name": this.getName(),
            "Email": this.getEmail(),
            "Birthdate": this.getBirthDate(),
            "Identity": this.getIdentity(),
            "IdentityType": this.getIdentityType(),
            "Address": this.getAddress(),
            "DeliveryAddress": this.getDeliveryAddress(),
        };
    }

    populate(plainObject: any): this {
        Object.keys(plainObject).map((key) => {
            const classKey: string = "_" + key.slice(0, 1).toLowerCase() + key.slice(1);
            if (key === "Address" || key === "DeliveryAddress") {
                this[classKey].populate({
                    Address: plainObject[key]
                });
            } else {
                this[classKey] = plainObject[key];
            }
        });

        return this;
    }
}
