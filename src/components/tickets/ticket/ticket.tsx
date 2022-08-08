import { Button, Card } from "antd";
import React, { useMemo } from "react";
import { TicketProps } from "../../../types/types";
import { getFormattedDate as gfd } from "../../../helpers/get-formatted-date";
import { currencyFormatter as cf } from "../../../helpers/currency-formatter";
import './ticket.css'



function Ticket(props: TicketProps){
    const {currency, ticket} = props;
    const {priceValue} = ticket;

    const ticketPrice = useMemo(() => {
        switch (currency) {
            case 'USD':
                return cf(priceValue, 'USD');
            case 'RUB':
                return cf(priceValue, 'RUB')
            case 'EUR':
                return cf(priceValue, 'EUR')
            default:
                break;
        }
    }, [currency, priceValue])

    const transfers = {
        0: '0 пересадок', 
        1: '1 пересадка',
        2: '2 пересадки',
        3: '3 пересадки'}[`${ticket.transfersCount}`];

    const departureDatetime = new Date(ticket.departureDatetime);
    const arrivalDatetime = new Date(ticket.arrivalDatetime);


    return (
        <Card className="ticket-card">
            <Card.Grid hoverable={false} style={{width: '33.3%', display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr 1fr'}}>
                <div className="company-logo">
                    <img src="./turkish-airlines-logo.png" alt="" />
                </div>
                <div className="action-buy-ticket">
                    <Button type="primary" style={{background: '#ff6d01', border: 'none', height: '100%', padding: '0'}} block>Купить <br/> за {ticketPrice}</Button>
                </div>
            </Card.Grid>
            <Card.Grid hoverable={false} style={{width: '66.6%', minHeight: '180px', display: 'flex',
    justifyContent: 'space-between', position: 'relative'
}}>
                <div className="departure">
                    <div className="time">{departureDatetime.toLocaleTimeString([],{timeStyle: 'short'})}</div>
                    <div className="place">{ticket.departurePlace}</div>
                    <div className="date">{gfd(ticket.departureDatetime)}</div>
                </div>
                <div className="transfers-count">
                    <div className="count">{transfers}</div>

                    <div className="transfer-image">
                        <hr />
                        <img src="./airplane.png" alt="" />
                    </div>
                    
                </div>
                <div className="arrival">
                    <div className="time">{arrivalDatetime.toLocaleTimeString([],{timeStyle: 'short'})}</div>
                    <div className="place">{ticket.arrivalPlace}</div>
                    <div className="date">{gfd(ticket.arrivalDatetime)}</div>
                </div>
            </Card.Grid>
        </Card>    
        
    )
}

export default Ticket;

