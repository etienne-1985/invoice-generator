import React from "react"
import { InvoiceSubtable, InvoiceTable } from "./InvoiceTable"
import { Config, TemplateData, TemplateDatafields, TemplateLabels } from "./model/TemplateDataModel"
import { UserData } from "./model/UserDataModel"

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

const Invoicee = ({ templateLabels, clientDetails }) => {
    const { name, street, city } = clientDetails
    return (<div style={{ margin: 16 }}>
        <div className="font-bold">{templateLabels.billTo}</div>
        <div style={{ margin: 16 }}>
            <p>{name}</p>
            <p>{street}</p>
            <p>{city}</p>
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
    const invoiceNb = "001"
    const currentDate = new Date()
    const year = "2023"
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
        <Invoicee clientDetails={userData.client} templateLabels={templateData.Labels} />
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
        <InvoiceTable templateLabels={templateData.Labels} workedDays={22} workActivity={userData.workActivity} />
        <div style={{ marginLeft: 'auto', textAlign: 'end', marginTop: "8px" }}>
            <VatStatement templateDatafields={templateData.Datafields} />
        </div>
        <div id="invoice-bottom" style={{ marginTop: "auto" }}>
            <PaymentDetails templateLabels={templateData.Labels} paymentDetails={userData.paymentDetails} />
            <LegalNotice templateDatafields={templateData.Datafields} />
        </div>
    </div>)
}