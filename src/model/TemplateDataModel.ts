/**
 * Data structure needed to fill invoice template generic fields
 */

export interface TemplateLabels {
    companyRegistration?: string, // SIRET in french
    vat: string,    // VAT or GST depending on country
    invoice: string,
    date: string,
    billTo: string,
    payment: string,
    bankIBAN: string,
    bankBIC: string,
    tableUnitPrice: string,
    tableBilledService: string,
    tableQuantity: string,
    tableTotal: string,
    tableBilledAmount: string
}

export interface TemplateDatafields {
    vatStatement: string,
    paymentTerm: string,
    advancedPaimentDiscount: string,
    latePaymentPenalties: string,
}

export interface Config {
    Locale: string,
    DateFormat: object,
}

export interface TemplateData {
    Labels: TemplateLabels,
    Datafields: TemplateDatafields,
    Config: Config
}