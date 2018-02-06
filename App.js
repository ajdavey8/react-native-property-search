'use strict';

import SearchPage from './SearchPage';
import SearchResults from './SearchResults';
import { StackNavigator, } from 'react-navigation';

const App = StackNavigator({
  Home: { screen: SearchPage },
  Results: { screen: SearchResults },
});
export default App;
