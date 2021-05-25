import React from 'react'
import { useContext } from 'react'
import { Children } from 'react'
import { Redirect, Route } from 'react-router'
import { UserContext } from '../../App'

export default function privateRoute({children,...rest}) {
    const [loggedInUser,setLoggedInUser] =useContext(UserContext);
    return (
        <Route>
            {...rest}
            render = {({location})=>
                loggedInUser.email ? (
                    children
                ) : (
                    <Redirect>
                        to={{ 
                            pathname: "/signin",
                            state: {from:location}
                         }}
                    </Redirect>
                )
            }
        </Route>
    )
}
