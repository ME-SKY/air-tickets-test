import { Checkbox, Col, Radio, Space } from 'antd';
import { useFilters } from '../../hooks/use-filters';
import {TransferType, FilterType, Transfers} from '../../types/types';
import './filters.css';

function Filters() {

  const currencyOptions = ['RUB', 'USD', 'EUR'];
  const transferOptions = [{value: 0, title: 'Без пересадок'},
                          {value: 1, title: '1 пересадка'},
                          {value: 2, title: '2 пересадки'},
                          {value: 3, title: '3 пересадки'}]


  const {changeFilters, currency, transfers} = useFilters();

  const currenciesButtons = currencyOptions.map(curr => 
    <Radio.Button key={curr} className='currency-radio-button' value={curr}>{curr}</Radio.Button>)

  const transferElements = transferOptions.map(trans => 
        <Col className='checkbox-item' key={trans.value}>
            <Checkbox value={trans.value}>{trans.title}</Checkbox>
            <div className='this-checkbox-only' onClick={() =>{ changeFilters(FilterType.Transfers, [trans.value as Transfers]) } }>ТОЛЬКО</div>
        </Col>
  )

  return (
    <div className="filters">
        <div className='currency-filter'>
            <div className='filter-title'>ВАЛЮТА</div>
            <div className='currency'>
                <Radio.Group buttonStyle={'solid'} value={currency} onChange={(e) => {changeFilters(FilterType.Currency, e.target.value)}}>
                    {currenciesButtons}
                </Radio.Group>
            </div> 
        </div>
        
        <div className='transfers-filter'>
            <div className='filter-title'>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
            <div className='transfers'> 
                <Checkbox.Group className='checkbox-group' value = {transfers} onChange={(e) => changeFilters(FilterType.Transfers, e as TransferType) }> 
                    <Space direction="vertical" className='filter-space'>              
                        <Col className='checkbox-item'><Checkbox value={'all'}>Все</Checkbox></Col>
                        {transferElements}            
                    </Space>
                </Checkbox.Group>
            </div>
        </div>
    </div>
  );
};

export default Filters;