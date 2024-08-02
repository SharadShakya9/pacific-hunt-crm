import { createGlobalStyle } from "styled-components";
import { antdSidebar } from "./antd/antd.Sidebar";
import { antdDataTable } from "./antd/antd.Datatable";

export const GlobalStyle = createGlobalStyle`
    ${antdSidebar}
    ${antdDataTable}
`