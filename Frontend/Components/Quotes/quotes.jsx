import React from "react";
import { Quotes } from "../../../Data/quotes";
import "./quotes.css";

const QuotesComponent = () => {
    return (
        <section id="quotes">
            <div className="quotes-cont">
                <div className="qc-flex-cont">
                    <div className="qc-fc-border-left"></div>
                    <p className="qc-quote">{Quotes.quote}</p>
                </div>
                <p className="qc-author">{Quotes.author}</p>
            </div>
        </section>
    )
};

export default QuotesComponent;