/** 
 * ENGLISH TEMPLATE DATASET 
 **/

import { TemplateLabels, TemplateDatafields, Config, TemplateData } from "../model/Template"

/*
 * TEMPLATE LABELS
 */
const LABELS_EN: TemplateLabels = {
    companyRegistration: "SIRET",
    vat: "VAT",
    invoice: "INVOICE",
    date: "DATE",
    billTo: "BILL TO",
    payment: "PAYEMENT",
    bankIBAN: "IBAN",
    bankBIC: "BIC/SWIFT",
    tableUnitPrice: "",
    tableBilledService: "",
    tableQuantity: "",
    tableTotal: "",
    tableBilledAmount: ""
}

/**
 * TEMPLATE DATAFIELDS
 */
const LATE_PAYMENT_PENALTIES =
    `Please be aware that according to the Late Payment of Unwrapped Debts Act 0000, 
freelancers are entitled to claim a 00.00 late fee upon non-payment of debts after this time, 
at which point a new invoice will be submitted with the addition of this fee. 
If payment of the revised invoice is not received within a further 14 days, 
additional interest will be charged to the overdue account and a statutory rate of 8 % plus Bank of England base of 0.5 %,
totalling 8.5 %.Parties cannot contract out of the Act’s provisions. `


const DATAFIELDS_EN: TemplateDatafields = {
    vatStatement: "",
    paymentTerm: "",
    advancedPaimentDiscount: "",
    latePaymentPenalties: LATE_PAYMENT_PENALTIES
}

/**
 * TEMPLATE CONFIG
 */
const CONFIG_EN: Config = {
    Locale: "en-US",
    DateFormat: { year: 'numeric', month: 'long', day: 'numeric' }
}


export const TEMPLATE_DATASET_EN: TemplateData = {
    Labels: LABELS_EN,
    Datafields: DATAFIELDS_EN,
    Config: CONFIG_EN
}





