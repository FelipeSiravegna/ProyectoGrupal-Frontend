import React, { useEffect, useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import NavbarP from '../NavbarP/NavbarP';

export default function NavDash() {
    return (
        <div>
            <NavbarP />
            <Dashboard />
        </div>
    )
}