import './scss/app.scss';
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import {Route, Switch} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/profile" exact component={Profile}/>
            </Switch>
        </div>
    );
}

export default App;
