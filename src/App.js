import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MovieSearcher } from './MoiveSearchComponent/MovieSearcher';
import { FileCard } from './MoiveSearchComponent/fileCard';

export default function App(){
    return(
        <Router>
            <Route exact path='/' component={MovieSearcher}></Route>
            <Route exact path='/filmDetail/:id' component={FileCard}></Route>
        </Router>
    )
}