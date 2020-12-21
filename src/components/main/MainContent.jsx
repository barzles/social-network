import React from "react";
import {Route} from "react-router-dom";

// Component
import Profile from "./profile/Profile";
import Dialogs from "./dialogs/Dialogs";
import Settings from "./settings/Settings";
import Music from "./music/Music";
import News from "./news/News";

const MainContent = (props) => {
    return (
            <main className='content'>
                <Route path='/dialogs' render={ () => <Dialogs
                dialogsPage={props.state.dialogsPage}/>}/>
                <Route exact path='/profile' render={ () => <Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch}
                />}/>
                <Route exact path='/news' component={News}/>
                <Route exact path='/music' component={Music}/>
                <Route exact path='/settings' component={Settings}/>
            </main>
    )
};

export default MainContent;