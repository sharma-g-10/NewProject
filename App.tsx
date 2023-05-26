import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigator from './source';
import {Provider as StoreProvider} from 'react-redux';
import store from './source/redux/store';


function App() {
  

  return (
    <StoreProvider store={store}>
        <SafeAreaProvider>
          <AppNavigator />
        </SafeAreaProvider>
    </StoreProvider>
  );
}

export default App;
