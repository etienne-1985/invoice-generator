export interface Company {
    name: string,
    registrationNumber?: string,                // SIRET pour entreprise française
    vatNumber?: string,             // N° TVA intracommunautaire pour assujetis
    street: string,
    city: string,
    email?: string,
    phone?: string,
}

export enum BillingMethod {
    HOURLY = "hourly",
    DAILY = "daily",
    WEEKLY = "weekly",
    CUSTOM = "custom"
}

export interface Billing {
    service: string,    // service or activity
    method: BillingMethod,
    unitPrice: number,
    qty?: number
}

export interface Client {
    company: Company,
    billing: Billing
}