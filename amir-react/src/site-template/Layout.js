import React from 'react';
import MainHaeder from './MainHaeder';
import MainFooter from './MainFooter';

function Layout ({children}) {
    return(
        <div>
            <MainHaeder/>

            <main>
              {children}
            </main>

            <MainFooter/>
        </div>
    )
}

export default Layout;
