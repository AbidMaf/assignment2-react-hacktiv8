import React, {useState, useEffect} from "react";
import axios from "axios";

const TableData = (props) => {
    const [currency, setCurrency] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("https://api.currencyfreaks.com/latest?apikey=f7192803302e40298996d5a532fa003e&symbols=CAD,EUR,IDR,JPY,CHF,GBP");
                setCurrency(response.data);
                // console.log(response)
            } catch (err) {
                console.log(err)
            }
        }
        getData();
    })
    console.log(currency)
    const customStyle = {
        minWidth: '50vw',
        tableLayout: 'fixed'
    }
    return (
        <table style={customStyle} cellPadding="15">
            <tr>
                <th>Currency</th>
                <th>We Buy</th>
                <th>Exchange Rate</th>
                <th>We Sell</th>
            </tr>
                {
                    Object.keys(currency.rates).map((key, index) => {
                        return (
                        <tr>
                            <td>{key}</td>
                            <td>{currency.rates[key] + currency.rates[key] * 0.05}</td>
                            <td>{currency.rates[key]}</td>
                            <td>{currency.rates[key] - currency.rates[key] * 0.05}</td>
                        </tr>
                        )
                    })
                }
        </table>
    )
}

export default TableData;