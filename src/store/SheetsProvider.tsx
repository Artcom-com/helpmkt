import React, { useMemo, useReducer } from 'react';
import SheetsContext, { SheetsContextType, SheetsType } from './SheetsContext';
import sheetsReducer from './sheetsReducer';

export interface SheetsProviderProps {
  children: JSX.Element | JSX.Element[]
}

export default function SheetsProvider({ children }: SheetsProviderProps): JSX.Element {
  const [sheetsState, dispatchSheetsAction] = useReducer(sheetsReducer, {
    sheetId: '',
    tableName: '',
    date: undefined,
    operation: 'default',
  });

  const handleAddSheetInfos = (infos: SheetsType): void => {
    dispatchSheetsAction({
      type: 'ADD_INFOS',
      sheetId: infos.sheetId,
      tableName: infos.tableName,
      date: infos.date,
      operation: infos.operation,
    });
  };

  const context: SheetsContextType = useMemo(() => ({
    sheetId: sheetsState.sheetId,
    tableName: sheetsState.tableName,
    date: sheetsState.date,
    operation: sheetsState.operation,
    handleAddSheetInfos,
  }), [sheetsState]);

  return (
    <SheetsContext.Provider value={context}>
      {children}
    </SheetsContext.Provider>
  );
}
