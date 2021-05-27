import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home'
import Hero from './pages/Hero'

const App = ()=> {
    return(
        <div className="App">
            <Router>
                <Switch>
                    <Route exact={true} path='/superhero-search/' component={Home} />
                    <Route path='/superhero-search/hero/:heroId' component={Hero} />
                </Switch>            
            </Router>
        </div>
    )
}

export default App;
