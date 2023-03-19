/**
 * Data structure needed to fill invoice user specific fields
 */

export interface UserData {
    company: {
        name: string,
        registrationNumber?: string,                // SIRET pour entreprise française
        vatNumber?: string,             // N° TVA intracommunautaire pour assujetis
        street: string,
        city: string,
        email: string,
    },
    workActivity: {
        billedService: string,
        unitPrice: number,
    },
    paymentDetails: {
        bankIBAN: string,
        bankBIC: string,
    },
    // Details about billed client
    client: {
        name: string,
        street: string,
        city: string,
    }
}