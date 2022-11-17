import React, { useEffect, useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import NavbarP from '../NavbarP/NavbarP';
import { useSelector } from 'react-redux';
import Logo from '../media/Logo.png'

export default function NavDash() {
    const userDB = useSelector((state) => state.user)
    const token = useSelector((state) => state.idToken)

    return (
        <div>
<NavbarP />
{userDB.admin? 
<Dashboard /> 
    : <div className='noAdmin'>
<h1>Error 404</h1>
<h2>Apparently you do not have access to this site, go to the main page to continue</h2>
<img src={Logo} alt="" width={300} />
    </div>
}
        </div>
        )
    }