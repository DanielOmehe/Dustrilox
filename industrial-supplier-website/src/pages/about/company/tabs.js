import "./tabs.css"
import { Children } from "react"
import { useDustriloxContext } from "../../../context"

const CompanyInfoTabs =({ children })=>{
    const { currentTab } = useDustriloxContext()
    return(
        <section className="company-info-tabs">{
            Children.map(children, (child, indx) => indx === currentTab ? child : null)
        }</section>
    )
}

export default CompanyInfoTabs