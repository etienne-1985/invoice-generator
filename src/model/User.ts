/**
 * Data structure needed to fill invoice user specific fields
 */

import { Billing, Client, Company } from "./Common"

export interface UserData {
    company: Company,
    paymentDetails: {
        bankIBAN: string,
        bankBIC: string,
    },
    // Details about billed client
    clients: {
        [key: string]: Client
    }
}