import { CurrencyType } from "../types/types";
import ieCheck from "./ie-check";

 function currencyFormatter(value: number, currency: CurrencyType) {
    const locale = {USD: 'en-US', EUR: 'en-US', RUB: 'ru-RU'}[currency];
    let formattedString = '';
    if(ieCheck){ //for ie compatability
        formattedString = Intl.NumberFormat(locale, { style: 'currency', currency: currency, maximumFractionDigits: 2})
            .format(value).replace('.00', '').replace(',00', '');
    } else {
        const fractionDigits = value % 1 === 0 ? 0 : 2; 
        formattedString = Intl.NumberFormat(locale, { style: 'currency', currency: currency, maximumFractionDigits: fractionDigits})
            .format(value);
    }
    
    
    return formattedString;
}

export {currencyFormatter}