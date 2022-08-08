import { Button, Card } from "antd";
import React, { useMemo } from "react";
import { TicketProps } from "../../../types/types";
import { getFormattedDate } from "../../../helpers/get-formatted-date";
import { currencyFormatter } from "../../../helpers/currency-formatter";
import './ticket.css'

function Ticket(props: TicketProps){
    const {currency, ticket} = props;
    const {priceValue} = ticket;

    const ticketPrice = useMemo(() => {
        return currencyFormatter(priceValue, currency);
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
            <Card.Grid className="ticket-actions" hoverable={false} >
                <div className="company-logo">
                    <img src="./turkish-airlines-logo.png" alt="" />
                </div>
                <div className="action-buy-ticket">
                    <Button type="primary" block>Купить <br/> за {ticketPrice}</Button>
                </div>
            </Card.Grid>
            <Card.Grid className="ticket-info" hoverable={false} >
                <div className="departure">
                    <div className="time">{departureDatetime.toLocaleTimeString([],{timeStyle: 'short'})}</div>
                    <div className="place">{ticket.departurePlace}</div>
                    <div className="date">{getFormattedDate(ticket.departureDatetime)}</div>
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
                    <div className="date">{getFormattedDate(ticket.arrivalDatetime)}</div>
                </div>
            </Card.Grid>
        </Card>    
        
    )
}

export default Ticket;

