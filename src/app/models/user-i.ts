export interface UserI {
    name: string;
    email: string;
    phone: number;
    address: AddressI;
    geo: GeoI;
}

interface AddressI {
    city: string;
    pincode: number;
}
interface GeoI {
    lat: number;
    lag: number;
}
