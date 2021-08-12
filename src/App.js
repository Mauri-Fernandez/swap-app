// install "react-router-dom" with the following command --> npm install react-router-dom
// install "react icons" with the following command --> npm install react-icons --save

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* Start [MRF 2021-08-10] components import */
import NavBar            from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
/* End   [MRF 2021-08-10] components import */

/* Start [MRF 2021-08-10] pages import */
import Home         from './pages/Home';
import Exchange     from './pages/Exchange';
import Pools        from './pages/Pools';
import Collectibles from './pages/Collectibles';
import More         from './pages/More';
/* End   [MRF 2021-08-10] pages import */

const App = () => {
  return (
    <Router>
      <NavBar/>
      <ItemListContainer greeting={'Saludar'}/>
      <Switch>
        <Route path ='/' exact        component = { Home } />
        <Route path ='/exchange'      component = { Exchange } />
        <Route path ='/pools'         component = { Pools } />
        <Route path ='/collectibles'  component = { Collectibles } />
        <Route path ='/more'          component = { More } />
      </Switch>
    </Router>
  );
}
export default App;
