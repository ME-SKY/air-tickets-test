import { CurrencyType } from "../types/types";

 function currencyFormatter(value: number, currency: CurrencyType) {
    const locale = {USD: 'en-US', EUR: 'en-US', RUB: 'ru-RU'}[currency];
    const fractionDigits = value % 1 === 0 ? 0 : 2;
    return new Intl.NumberFormat(locale, { style: 'currency', currency: currency, maximumFractionDigits: fractionDigits}).format(value);
}

export {currencyFormatter}