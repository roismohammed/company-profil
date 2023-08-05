import { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Guest ({children}){
    return(
        <Fragment>
            <Header/>
            {children}
        </Fragment>
    )
}