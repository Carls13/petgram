import React, { useContext } from 'react';

import { GlobalStyles } from './styles/GlobalStyles';
import { Logo } from './components/Logo/index';

import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { User } from './pages/User';
import { Favs } from './pages/Favs';
import { NotRegisteredUser } from './pages/NotRegisteredUser';

import { NotFound } from './components/NotFound/NotFound';

import { NavBar } from './components/NavBar';

import { Router, Redirect } from '@reach/router';

import { Context } from './Context';

//Render props
//Change Context.Consumer into UserLogged
// const UserLogged = ({ children }) => {
//     return children({ isAuth: false });
// }

export const App = () => {
    const { isAuth } = useContext(Context)

    return (
        <React.Fragment>
            <GlobalStyles/>
            <Logo/>
        	<Router>
                    <NotFound default />
                    <Home path='/'/>
                    <Home path='/pet/:id'/>
                    <Detail path='/detail/:detailId'/>
                    
                    {!isAuth && <NotRegisteredUser path="/login" />}
                    {!isAuth && <Redirect from="/favs" to ="/login"/>}
                    {!isAuth && <Redirect from="/user" to ="/login"/>}
                    {isAuth && <Redirect from="/login" to ="/"/>}
                    
                    <Favs path='/favs'/>
                    <User path='/user'/>
             </Router>
             <NavBar/>
        </React.Fragment>
    )
}