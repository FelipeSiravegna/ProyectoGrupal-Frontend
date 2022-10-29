import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button'

export default function Login(){

    const {loginWithRedirect,logout} = useAuth0()

    return(
          <div>
            <Button variant="text" color="rojo" className="botones" onClick={() => loginWithRedirect()}>
              Login
            </Button>
            <Button variant="text" color="rojo" className="botones" onClick={() => logout()}>
            Logout
          </Button>
          </div>
    )
}