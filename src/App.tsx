import { InvoiceTemplate } from "./InvoiceTemplate";
import { TEMPLATE_DATASET_FR } from "./dataset/template.dataset.fr";
// COMMENT LINE BELOW
import { USER_CUSTOM_DATA } from "./dataset/userdata.example";
// UNCOMMENT LINE BELOW ONCE FILE CREATED LOCALLY
// import { USER_CUSTOM_DATA } from "./dataset/userdata.local";
import "./main.css"

export function App() {
    return <>
        {/* <h1 className="text-3xl font-bold underline">
            Invoice Template
        </h1>
        <Test /> */}
            <InvoiceTemplate templateData={TEMPLATE_DATASET_FR} userData={USER_CUSTOM_DATA} />
    </>;
}