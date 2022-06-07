import React from 'react';
import { Router, Route, Switch } from "react-router-dom"
import StreamList from "./streams/StreamList"
import StreamCreate from "./streams/StreamCreate"
import StreamShow from "./streams/StreamShow"
import StreamEdit from "./streams/StreamEdit"
import StreamDelete from "./streams/StreamDelete"
import Header from './Header';
import history from '../history';

//exact gerekli her sayfa için yoksa üst üste biner
const App = () => {
    return (
        <div className='ui container'>
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={StreamList} />
                        <Route path="/streams/new" exact component={StreamCreate} />
                        <Route path="/streams/edit/:id" exact component={StreamEdit} />
                        <Route path="/streams/delete/:id" exact component={StreamDelete} />
                        <Route path="/streams/:id" exact component={StreamShow} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
};

export default App;


//navigation için Link ve to kullan !