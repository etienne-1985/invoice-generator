import React from "react"
import { Config, TemplateData, TemplateDatafields, TemplateLabels } from "./model/TemplateDataModel"
import { UserData } from "./model/UserDataModel"

const Biller = ({ templateLabels, userCompanyDetails }: { templateLabels: TemplateLabels, userCompanyDetails: any }) => {
    const { name, street, city, companyNb, vatNb, email } = userCompanyDetails
    return (<div style={{ margin: 16 }}>
        <p className="font-bold">{templateLabels.companyStatus} {name}</p>
        <p>{templateLabels.companyIdLabel}: {companyNb}</p>
        <p>{templateLabels.vat}: {vatNb}</p>
        <p>{street}</p>
        <p>{city}</p>
        <p>{email}</p>
    </div>)
}

const BilledClient = ({ clientDetails }) => {
    const { name, street, city } = clientDetails
    return (<div style={{ margin: 16 }}>
        <p>{name}</p>
        <p>{street}</p>
        <p>{city}</p>
    </div>)
}

const InvoiceInfos = ({ templateLabels, config, invoiceNb, invoiceDate }:
    { templateLabels: TemplateLabels, config: Config, invoiceNb, invoiceDate }) => {
    return (<div style={{ margin: 16 }}>
        <p className="font-bold">{templateLabels.invoice}</p>
        <p>{invoiceNb}</p>
        <p className="font-bold">{templateLabels.date}</p>
        <p>{invoiceDate.toLocaleDateString(config.Locale, config.DateFormat)}</p>
    </div>)
}
const InvoiceFullNumber = ({ templateLabels, invoiceFullNb }: { templateLabels: TemplateLabels, invoiceFullNb }) => {
    return (<div style={{ margin: "16px" }}>
        <h2 className="font-bold">{templateLabels.invoice}</h2>
        <p>N° {invoiceFullNb}</p>
    </div>)
}

const InvoiceTable = () => {
    return (<>Invoice Table</>)
}

const PaymentDetails = ({ templateLabels, paymentDetails }: { templateLabels: TemplateLabels, paymentDetails }) => {
    const { bankIBAN, bankBIC } = paymentDetails

    return (<div style={{ margin: 16 }}>
        <h2>PAYMENT</h2>
        <p>
            {templateLabels.bankIBAN}: {bankIBAN}
            <br />
            {templateLabels.bankBIC}: {bankBIC}
        </p>

    </div>)
}

const LegalNotices = ({ templateDatafields }: { templateDatafields: TemplateDatafields }) => {
    return (<div style={{ margin: 16 }}>
        <p>CONDITIONS</p>
        <p>
            {templateDatafields.paymentTerm} {templateDatafields.advancedPaimentDiscount}
            <br />
            {templateDatafields.latePaymentPenalties}
        </p>
    </div>)
}

export const InvoiceTemplate = ({ templateData, userData }: { templateData: TemplateData, userData: UserData }) => {
    const invoiceNb = "001"
    const currentDate = new Date()
    const year = "2023"
    const invoiceFullNb = `F-${year}-${invoiceNb}`

    return (<div id="invoice-document" style={{ margin: '60px' }}>
        <div id="invoice-header" style={{ display: 'flex' }}>
            <Biller templateLabels={templateData.Labels} userCompanyDetails={userData.CompanyDetails} />
            <div style={{
                marginLeft: 'auto',
                textAlign: 'end'
            }}>
                <InvoiceInfos invoiceNb={invoiceNb} invoiceDate={currentDate} templateLabels={templateData.Labels} config={templateData.Config} />
            </div>
        </div>
        <div id="invoice-title" style={{ textAlign: 'center' }}>
            <InvoiceFullNumber invoiceFullNb={invoiceFullNb} templateLabels={templateData.Labels} />
        </div>
        <div>{templateData.Labels.billTo}</div>
        <BilledClient clientDetails={userData.ClientDetails} />
        <InvoiceTable />
        <PaymentDetails templateLabels={templateData.Labels} paymentDetails={userData.PaymentDetails} />
        <LegalNotices templateDatafields={templateData.Datafields} />
    </div>)
}