import React, { useState } from "react";
import { FiltersType, CurrencyType, TransferType, FilterType } from "../types/types";

export const FiltersContext = React.createContext<FiltersType>({
    currency: 'USD',
    transfers: ['all'],
    changeFilters: (filterName, value) => {}
});
  
const {Provider} = FiltersContext;
  
export const FiltersProvider = ({children}: any) => {
    const [currency, setCurrency] = useState<CurrencyType>('USD');
    const [transfers, setTransfers] = useState<TransferType>(['all']);
   
  
    const changeFilters = (filterType: FilterType, value: CurrencyType | TransferType) => {
    
      switch (filterType) {
        case FilterType.Currency:
          setCurrency(value as CurrencyType);
          break;
        case FilterType.Transfers:
          let newTransfersValue = value;
  
          if(value[value.length - 1] === 'all'){
            newTransfersValue = ['all']
          }
  
          if(value[0] === 'all' && value.length > 1){
            newTransfersValue = value.slice(1, value.length) as TransferType
          }
  
          if(value.length === 0){
            newTransfersValue = ['all'];
          }
          
          setTransfers(newTransfersValue as TransferType);
          break;
        default:
          break;
      }  
    }
    
    return (
      <Provider value={{currency, transfers, changeFilters}}>
        {children}
      </Provider>
    )
  }