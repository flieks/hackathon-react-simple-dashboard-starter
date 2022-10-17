import React from 'react';

interface AppContextInterface {
     someState: string,
     setSomeState: any;
  }

const AppContext = React.createContext<AppContextInterface>({
     someState: "some string",
     setSomeState: undefined,
});

export default AppContext;
