/**
 * Data structure needed to fill invoice template generic fields
 */

export interface TemplateLabels {
    companyStatus?: string,  // optional
    companyIdLabel?: string, // company identification number
    vat: string,    // (VAT, GST, ...) adapt to your country 
    invoice: string,
    date: string,
    billTo: string,
    bankIBAN: string,
    bankBIC: string,
}

export interface TemplateDatafields {
    nonApplicableVAT: string,
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