import { Company } from "./company.model";

export interface CompanyGroup {
    companyGroupName: String,
    groupEmail: String,
    groupPhone:String,
    groupLogoUrl:String,
    superAccount:Account,
    company:[String],//Company can have many Restaurants(outlets)
}