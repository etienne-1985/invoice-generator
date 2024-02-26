import React from "react"
import { InvoiceSubtable, InvoiceTable } from "./InvoiceTable"
import { Config, TemplateData, TemplateDatafields, TemplateLabels } from "./model/Template"
import { UserData } from "./model/User"
import { Billing, BillingMethod, Client } from "./model/Common"

const Invoicer = ({ templateLabels, userCompanyDetails }: { templateLabels: TemplateLabels, userCompanyDetails: any }) => {
    const { name, street, city, registrationNumber, vatNumber, email } = userCompanyDetails
    return (<div style={{ margin: 16 }}>
        <p className="font-bold">{name}</p>
        <p>{templateLabels.companyRegistration}: {registrationNumber}</p>
        <p>{templateLabels.vat}: {vatNumber}</p>
        <p>{street}</p>
        <p>{city}</p>
        <p>{email}</p>
    </div>)
}

const Invoicee = ({ templateLabels, clientDetails }: { templateLabels, clientDetails: Client }) => {
    const { name, street, city, phone, registrationNumber } = clientDetails.company
    return (<div style={{ margin: 16 }}>
        <div className="font-bold">{templateLabels.billTo}</div>
        <div style={{ margin: 16 }}>
            <p>{name}</p>
            <p>{street}</p>
            <p>{city}</p>
            {phone && <p>N° immatriculation: {registrationNumber}</p>}
            {phone && <p>N° tél: {phone}</p>}
        </div>
    </div>)
}

const InvoiceInfo = ({ templateData, invoiceFullNb, invoiceDate }: { templateData: TemplateData, invoiceFullNb, invoiceDate }) => {
    const { Config, Labels } = templateData
    return (<div style={{ margin: "16px" }}>
        <h1 className="font-bold">{Labels.invoice}</h1>
        <p>N° {invoiceFullNb}</p>
        <h1 className="font-bold">{Labels.date}</h1>
        <p>{invoiceDate.toLocaleDateString(Config.Locale, Config.DateFormat)}</p>
    </div>)
}

const PaymentDetails = ({ templateLabels, paymentDetails }: { templateLabels: TemplateLabels, paymentDetails }) => {
    const { bankIBAN, bankBIC } = paymentDetails

    return (<div style={{ margin: 16 }}>
        <h2 className="font-bold">{templateLabels.payment}</h2>
        <p>
            {templateLabels.bankIBAN}: {bankIBAN}
            <br />
            {templateLabels.bankBIC}: {bankBIC}
        </p>

    </div>)
}

const VatStatement = ({ templateDatafields }: { templateDatafields: TemplateDatafields }) => {
    return (<p className="italic text-sm">{templateDatafields.vatStatement}</p>)
}

const LegalNotice = ({ templateDatafields }: { templateDatafields: TemplateDatafields }) => {
    return (<div style={{ margin: 16, whiteSpace: 'pre-line' }}>
        <h2 className="font-bold">CONDITIONS</h2>
        <p className="text-sm">
            {templateDatafields.paymentTerm} {templateDatafields.advancedPaimentDiscount}
            <br />
            {templateDatafields.latePaymentPenalties}
        </p>
    </div>)
}

// const InvoiceInfos = ({ templateLabels, config, invoiceNb, invoiceDate }:
//     { templateLabels: TemplateLabels, config: Config, invoiceNb, invoiceDate }) => {
//     return (<div style={{ margin: 16 }}>
//         <h2 className="font-bold">{templateLabels.invoice}</h2>
//         <p>{invoiceNb}</p>
//         <p className="font-bold">{templateLabels.date}</p>
//         <p>{invoiceDate.toLocaleDateString(config.Locale, config.DateFormat)}</p>
//     </div>)
// }

export const InvoiceTemplate = ({ templateData, userData }: { templateData: TemplateData, userData: UserData }) => {
    const invoiceNb = "002"
    const client = "myClient"
    const currentDate = new Date()
    const billing: Billing = {
        method: BillingMethod.WEEKLY,
        unitPrice: 300,
        qty: 1,
        service: "Développement logiciel"
    }
    const year = "2024"
    const invoiceFullNb = `F-${year}-${invoiceNb}`

    return (<div id="invoice-document" style={{ height: "100%", display: "flex", flexDirection: "column" }} >
        <div id="invoice-top" style={{ display: 'flex' }}>
            <div id="invoice-title">
                <InvoiceInfo templateData={templateData} invoiceFullNb={invoiceFullNb} invoiceDate={currentDate} />
            </div>
            <div style={{ marginLeft: 'auto', textAlign: 'end' }}>
                <Invoicer templateLabels={templateData.Labels} userCompanyDetails={userData.company} />
                {/* <InvoiceInfos invoiceNb={invoiceNb} invoiceDate={currentDate} templateLabels={templateData.Labels} config={templateData.Config} /> */}
            </div>
        </div>

        {/* <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr> */}
        <Invoicee clientDetails={userData.clients[client]} templateLabels={templateData.Labels} />
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
        <InvoiceTable templateLabels={templateData.Labels} billing={billing} />
        <div style={{ marginLeft: 'auto', textAlign: 'end', margin: "8px" }}>
            <VatStatement templateDatafields={templateData.Datafields} />
        </div>
        <div id="invoice-bottom" style={{ marginTop: "auto" }}>
            <PaymentDetails templateLabels={templateData.Labels} paymentDetails={userData.paymentDetails} />
            <LegalNotice templateDatafields={templateData.Datafields} />
        </div>
    </div>)
}