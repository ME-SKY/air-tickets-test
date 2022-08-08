import React, { useEffect, useState } from 'react';
import Logo from './components/logo/logo'
import './App.css';
import 'antd/dist/antd.min.css'
import Tickets from './components/tickets/tickets';
import Filters from './components/filters/filters';
import Api from './api/api';
import {Layout, Row, Col, Card} from 'antd';
import { Ticket } from './types/types';
import { FiltersProvider } from './contexts/filters-context';
import useWindowSizes from './hooks/use-window-sizes';
// import { ITicket } from './components/tickets/ticket/ticket';

const {Header, Content} = Layout;

const headerStyles = {
  height: '15vh', 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'transparent'
};

function App() {

  const [tickets, setTickets] = useState<Ticket []>([]);
  const {innerWidth, innerHeight} = useWindowSizes();

  const [{filterSpans, ticketsSpans}, setSpans] = useState({filterSpans: 6, ticketsSpans: 18})

  useEffect(() => {
    !tickets.length && Api.getTickets().then((data) => {
      setTickets(data);
    });
  })

  useEffect(() => {
    innerWidth < 1050 && setSpans({filterSpans: 8, ticketsSpans: 16});
    innerWidth > 1050 && setSpans({filterSpans: 6, ticketsSpans: 18});
  }, [innerWidth])

  return (
    <div className='App'>      

      <div className="dev-info">{innerWidth} / {innerHeight}</div>

      <Layout className='app-layout'>
        
        <Header style={headerStyles}>
          <Logo/>
        </Header>
        
        <FiltersProvider>
          <Content className='content'>
            <Row gutter={[16, 16]}>
              
              <Col span={filterSpans}>
                <Card className='filters-card' bodyStyle={{padding: '16px 0px'}}>
                  <Filters/>
                </Card>  
              </Col>
              
              <Col span={ticketsSpans}>
                <Tickets tickets={tickets} />
              </Col>
            
            </Row>
          </Content>
        </FiltersProvider>
      
      </Layout>
    </div>
  );
}

export default App;
