import Address from './Address';

export default class Customer implements CieloSerializable{
    
    private _name:string;
    private _email:string;
    private _birthdate:string;
    private _identity:string;
    private _identityType: string;
    private _address: Address;
    private _deliveryAddress: Address;

    static readonly PERSON: string = 'CPF';

    constructor(name: string){
        this._name = name;
        this._address = new Address();
        this._deliveryAddress = new Address();
    }

    address(): Address {
        return this.setAddress( new Address() );
    }

    deliveryAddress(): Address {
        return this.setDeliveryAddress( new Address() );
    }

    getName(): string {
        return this._name;
    }

    setName(name: string): string{
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

    setIdentity(identity: string): Customer{
        this._identity = identity;
        return this;
    }

    getIdentity(): string{
        return this._identity;
    }

    setIdentityType(identityType: string): Customer{
        this._identityType = identityType;
        return this;
    }

    getIdentityType(): string{
        return this._identityType;
    }

    setAddress(address: Address = new Address() ): Address{
        this._address = address;  
        return this._address;
    }

    setDeliveryAddress(address: Address = new Address() ): Address{
        this._deliveryAddress = address;        
        return this._deliveryAddress;
    }

    populate( plainObject: Object): any {
        
        Object.keys(plainObject).map( (key) => {
            var classKey = '_' + key.slice(0, 1).toLowerCase() + key.slice(1);

            if(key == 'Address' || key == 'DeliveryAddress'){
                // esperar a implementação da classe Address implementada pelo Breno

                // this[classKey] = new Address().populate(plainObject[key]);
                this[classKey] = new Address();

            }
            else{
                this[classKey] = plainObject[key];
            }
            
        });

        return this;

    }
}
