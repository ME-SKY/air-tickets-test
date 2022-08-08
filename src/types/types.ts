export enum FilterType{
    Currency,
    Transfers
}

type Transfers = 'all' | 0 | 1 | 2 | 3;
type CurrencyType = 'RUB' | 'USD' | 'EUR';
type TransferType = Transfers[];

interface FiltersType {
    currency: CurrencyType, 
    transfers: TransferType, 
    changeFilters: (filterType: FilterType, value: CurrencyType | TransferType) => void
}

interface Ticket{
    id: number,
    logo: string,
    priceValue: number,
    arrivalDatetime: string,
    arrivalPlace: string,
    departureDatetime: string,
    departurePlace: string,
    transfersCount: Transfers | Omit<Transfers, 'all'>      
}

interface TicketProps{
    ticket: Ticket,
    currency?: CurrencyType   
}

interface TicketsProps{
    tickets: Ticket []
}

export type {
    FiltersType,
    Ticket,
    TicketProps,
    TicketsProps,
    Transfers,
    CurrencyType,
    TransferType
}