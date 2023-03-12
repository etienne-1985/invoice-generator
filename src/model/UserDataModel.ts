/**
 * Data structure needed to fill invoice user specific fields
 */

export interface UserData {
    CompanyDetails: {
        name: string,
        id?: string,                // SIRET pour entreprise française
        vatNb?: string,             // N° TVA intracommunautaire pour assujetis
        streetAddress: string,
        city: string,
        email: string,
    },
    CompanyActivity: {
        product: string,
        unitPrice: string,
    },
    PaymentDetails: {
        bankIBAN: string,
        bankBIC: string,
    },
    // Details about billed client
    ClientDetails: {
        name: string,
        street: string,
        city: string,
    }
}