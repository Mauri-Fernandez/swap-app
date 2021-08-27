// install "react-router-dom" with the following command --> npm install react-router-dom
// install "react icons" with the following command --> npm install react-icons --save

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* Start [MRF 2021-08-10] components import */
import NavBar            from './components/NavBar/NavBar';
import ItemDetailContainer  from './components/ItemDetailContainer/ItemDetailContainer';
/* End   [MRF 2021-08-10] components import */

/* Start [MRF 2021-08-10] pages import */
import Home         from './pages/Home';
import Marketplace     from './pages/Marketplace';
import Arena        from './pages/Arena';
import Collectibles from './pages/Collectibles';
import More         from './pages/More';
/* End   [MRF 2021-08-10] pages import */

const App = () => {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path ='/' exact        component = { Home } />
        <Route path ='/marketplace'   component = { Marketplace } />
        <Route path ='/Arena'         component = { Arena } />
        <Route path ='/collectibles'  component = { Collectibles } />
        <Route path ='/more'          component = { More } />
        <Route path ='/detail'        component = { ItemDetailContainer } />
      </Switch>
    </Router>
  );
}
export default App;
