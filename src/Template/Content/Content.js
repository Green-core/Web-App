import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Auth from '../../Layouts/Auth'
import ViewSingleMessage from '../../Views/ChatModule/ViewSingleChat/ViewSingleMessage'
import ViewAllChats from '../../Views/ChatModule/ViewAllChats/ViewAllChats'

function Content(){
    return (
        <ViewSingleMessage />
        // <ViewAllChats />
        // <Switch>
        //     <Route path="/auth">
        //         <Auth />
        //     </Route>
        //     {/* <div>
        //         H!
        //     </div> */}
        // </Switch>
    )
}

export default Content