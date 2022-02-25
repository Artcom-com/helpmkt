import { createContext } from 'react';

export interface SheetsType {
  sheetId: string
  tableName: string
  csv: File | undefined
  date: Date | undefined
  operation: 'callHours' | 'callDuration' | 'default'
  locationName: string
}

export interface SheetsContextType extends SheetsType {
  handleAddSheetInfos: (infos: SheetsType) => void
}

export default createContext<SheetsContextType>({
  sheetId: '',
  tableName: '',
  csv: undefined,
  date: undefined,
  operation: 'default',
  locationName: '',
  handleAddSheetInfos: (infos: SheetsType) => console.log(infos),
});