import { InvoiceTemplate } from "./InvoiceTemplate";
import { TEMPLATE_DATASET_FR } from "./dataset/template.dataset.fr";
import { USER_DATASET } from "./dataset/user.dataset";
import "./main.css"

export function App() {
    const templateData = TEMPLATE_DATASET_FR
    const userData = USER_DATASET
    return <>
        {/* <h1 className="text-3xl font-bold underline">
            Invoice Template
        </h1>
        <Test /> */}
        <InvoiceTemplate templateData={templateData} userData={userData} />
    </>;
}