import { createContext } from 'react'
export const AppContext = createContext<any>()

export const AppProvider = (props: ICommonProps) => {

  const store: any = {
  }

  return (
    <AppContext.Provider value={store}>
      {props?.children}
    </AppContext.Provider>
  )
}
