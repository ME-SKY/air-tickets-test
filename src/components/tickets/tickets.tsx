import React from 'react';
import {TicketsProps, Transfers} from '../../types/types'
import Ticket from './ticket/ticket';
import {useFilters} from './../../hooks/use-filters'
import './tickets.css'

function Tickets(props: TicketsProps) {
    const {currency, transfers} = useFilters()

    return (
        <div className="tickets">
            { props.tickets
                .filter(ticket => transfers.includes(ticket.transfersCount as Transfers)|| transfers[0] === 'all')
                .map(ticket => <Ticket ticket = {ticket} 
                                        key={ticket.id}
                                        currency={currency}/> )}
        </div>
    );
}

export default Tickets;