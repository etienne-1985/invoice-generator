import { TemplateLabels } from "./model/TemplateDataModel"

export const InvoiceTable = ({ templateLabels, workedDays, workActivity }: { templateLabels: TemplateLabels, workedDays, workActivity }) => {
    const { tableUnitPrice, tableBilledService, tableQuantity, tableTotal } = templateLabels
    const { unitPrice, billedService } = workActivity
    const subtotal = workedDays * unitPrice
    return (<>
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            {tableBilledService}
                        </th>
                        <th scope="col" className="px-6 py-3">
                            {tableQuantity}
                        </th>
                        <th scope="col" className="px-6 py-3">
                            {tableUnitPrice}
                        </th>
                        <th scope="col" className="px-6 py-3">
                            {tableTotal}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {billedService}
                        </th>
                        <td className="px-6 py-4">
                            {workedDays}
                        </td>
                        <td className="px-6 py-4">
                            {unitPrice}€
                        </td>
                        <td className="px-6 py-4">
                            {subtotal}€
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <InvoiceSubtable templateLabels={templateLabels} total={subtotal} billedAmount={subtotal} />
    </>)
}


export const InvoiceSubtable = ({ templateLabels, total, billedAmount }) => {
    const { tableBilledAmount, tableTotal } = templateLabels
    return (<>
        <div className="relative overflow-x-auto">
            <table className="text-sm text-left text-gray-500 dark:text-gray-400" style={{ marginLeft: 'auto' }}>
                <tbody>
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {tableTotal}
                        </th>
                        <td className="px-6 py-4">
                            {total}€
                        </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {tableBilledAmount}
                        </th>
                        <td className="px-6 py-4">
                            {billedAmount}€
                        </td>
                    </tr>
                </tbody>
            </table>
        </div></>)
}