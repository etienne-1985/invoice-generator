/** 
 * FRENCH TEMPLATE DATASET 
 **/

import { Config, TemplateData, TemplateDatafields, TemplateLabels } from "../model/Template"

// LABELS
const LABELS_FR: TemplateLabels = {
    companyRegistration: "SIRET",
    vat: "TVA",
    invoice: "FACTURE",
    date: "DATE",
    billTo: "CLIENT",
    payment: "PAIEMENT",
    bankIBAN: "IBAN",
    bankBIC: "BIC/SWIFT",
    tableUnitPrice: "Prix unité HT",
    tableBilledService: "Prestation",
    tableQuantity: "Qté",
    tableTotal: "Total HT",
    tableBilledAmount: "Net à payer"
}

// DATAFIELDS
const TVA_EXCLUSION_FRANCHISE_BASE = "TVA non applicable art. 293B du CGI"
const TVA_FACTURATION_HORS_UE = "TVA non applicable – art. 259-1  du CGI"
const NO_ADVANCED_PAIEMENT_DISCOUNT = "Pas d’escompte pour règlement anticipé. "
const LATE_PAYMENT_PENALTIES =
    `En cas de retard de paiement, indemnité forfaitaire légale pour frais de recouvrement: 40€.
    Les pénalités de retard correspondent à: 2.7% du montant TTC. `

const DATAFIELDS_FR: TemplateDatafields = {
    vatStatement: TVA_FACTURATION_HORS_UE,
    paymentTerm: "Paiement à 30 jours. ",
    advancedPaimentDiscount: NO_ADVANCED_PAIEMENT_DISCOUNT,
    latePaymentPenalties: LATE_PAYMENT_PENALTIES
}

// CONFIG
const CONFIG_FR: Config = {
    Locale: "fr-FR",
    DateFormat: { year: 'numeric', month: 'long', day: 'numeric' }
}

export const TEMPLATE_DATASET_FR: TemplateData = {
    Labels: LABELS_FR,
    Datafields: DATAFIELDS_FR,
    Config: CONFIG_FR
}

