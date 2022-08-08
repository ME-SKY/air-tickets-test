import { Checkbox, Col, Radio, Space } from 'antd';
import { useFilters } from '../../hooks/use-filters';
import {TransferType, FilterType} from '../../types/types';
import './filters.css';

function Filters() {

  const {changeFilters, currency, transfers} = useFilters();

  return (
    <div className="filters">
        <div className='currency-filter'>
            <div className='filter-title'>ВАЛЮТА</div>
            <div className='currency'>
                <Radio.Group style={{display: 'flex', flexFlow: 'row nowrap',justifyContent: 'space-between'}} buttonStyle={'solid'} value={currency} onChange={(e) => {changeFilters(FilterType.Currency, e.target.value)}}>
                    <Radio.Button className='currency-radio-button' style={{borderRadius: '5px 0 0 5px'}} value="RUB" >RUB</Radio.Button>
                    <Radio.Button  className='currency-radio-button' value="USD">USD</Radio.Button>
                    <Radio.Button className='currency-radio-button' style={{borderRadius: '0 5px 5px 0'}} value="EUR">EUR</Radio.Button>
                </Radio.Group>
            </div> 
        </div>
        
        <div className='transfers-filter'>
            <div className='filter-title'>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
            <div className='transfers'> 
                <Checkbox.Group className='checkbox-group' value = {transfers} onChange={(e) => changeFilters(FilterType.Transfers, e as TransferType) }> 
                    <Space direction="vertical" className='filter-space'>              
                        <Col className='checkbox-item'><Checkbox value={'all'}>Все</Checkbox></Col>
                        <Col className='checkbox-item'><Checkbox value={0}>Без пересадок</Checkbox><div className='this-checkbox-only' onClick={() =>{ changeFilters(FilterType.Transfers, [0]) } }>ТОЛЬКО</div></Col>
                        <Col className='checkbox-item'><Checkbox value={1}>1 пересадка</Checkbox><div className='this-checkbox-only' onClick={() =>{ changeFilters(FilterType.Transfers, [1]) } }>ТОЛЬКО</div></Col>
                        <Col className='checkbox-item'><Checkbox value={2}>2 пересадки</Checkbox><div className='this-checkbox-only' onClick={() =>{ changeFilters(FilterType.Transfers, [2]) } }>ТОЛЬКО</div></Col>
                        <Col className='checkbox-item'><Checkbox value={3}>3 пересадки</Checkbox><div className='this-checkbox-only' onClick={() =>{ changeFilters(FilterType.Transfers, [3]) } }>ТОЛЬКО</div></Col>             
                    </Space>
                </Checkbox.Group>
            </div>
        </div>
    </div>
  );
};

export default Filters;