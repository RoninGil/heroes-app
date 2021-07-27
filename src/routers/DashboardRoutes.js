import React from 'react';
import { NavBar } from '../components/ui/NavBar';
import {MarvelPage} from '../components/marvel/MarvelPage';
import {HeroPage} from '../components/heroes/HeroPage';
import {
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import { DCPage } from '../components/dc/DCPage';
import { SearchPage } from '../components/search/SearchPage';

export const DashboardRoutes = () => {
    return (
        <>
            <NavBar/>
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={MarvelPage}/>
                    <Route exact path="/hero/:heroeId" component={HeroPage}/>
                    <Route exact path="/dc" component={DCPage}/>
                    <Route exact path="/search" component={SearchPage}/>
                    <Redirect to ="/marvel"/>
                </Switch>

            </div>
        </>
    )
}
