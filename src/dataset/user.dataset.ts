/**
 * USER SPECIFIC DATA TO BE CUSTOMIZED
 */

import { UserData } from "../model/UserDataModel";

export const USER_DATASET: UserData = {
    CompanyDetails: {
        name: "My Company",
        id: "123456789",
        streetAddress: "company street street",
        city: "12345 City, Country",
        vatNb: "",
        email: "email@address.me"
    },
    PaymentDetails: {
        bankIBAN: "1234 5678 ABCD EFGH",
        bankBIC: "1234 5678 ABCD EFGH"
    },
    CompanyActivity: {
        product: "billed service",
        unitPrice: "day rate"
    },
    ClientDetails: {
        name: "Client name",
        street: "client street address",
        city: "1234 City, Country"
    }
}