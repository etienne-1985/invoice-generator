/**
 * Create new local file `userdata.local.ts` (which is already in gitignore list)
 * Copy content below over that file and customize with personal data
 */

import { UserData } from "../model/UserDataModel";

export const USER_CUSTOM_DATA: UserData = {
    company: {
        name: "My Company",
        registrationNumber: "123456789",
        street: "street address",
        city: "12345 City, Country",
        vatNumber: "",
        email: "email@address.me"
    },
    paymentDetails: {
        bankIBAN: "1234 5678 ABCD EFGH",
        bankBIC: "1234 5678 ABCD EFGH"
    },
    workActivity: {
        billedService: "billed service",
        unitPrice: 214
    },
    client: {
        name: "Client name",
        street: "street address",
        city: "1234 CITY, COUNTRY"
    }
}