import React from 'react';
import NaveBer from '../componets/share/naveber/NaveBer';
import { Outlet } from 'react-router';

const Roots = () => {
    return (
        <div>
            <NaveBer></NaveBer>
            <Outlet>
                
            </Outlet>
            
        </div>
    );
};

export default Roots;