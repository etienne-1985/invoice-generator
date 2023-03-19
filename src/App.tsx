import { InvoiceTemplate } from "./InvoiceTemplate";
import { TEMPLATE_DATASET_FR } from "./dataset/template.dataset.fr";
import { USER_DATA_EXAMPLE } from "./dataset/userdata.example";
import "./main.css"

export function App() {
    // DATA input
    const templateData = TEMPLATE_DATASET_FR
    const userData = USER_DATA_EXAMPLE
    return <>
        {/* <h1 className="text-3xl font-bold underline">
            Invoice Template
        </h1>
        <Test /> */}
        <InvoiceTemplate templateData={templateData} userData={userData} />
    </>;
}