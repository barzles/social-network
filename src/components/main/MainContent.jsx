import React from "react";
import {Route} from "react-router-dom";

// Component
import DialogsContainer from "./dialogs/DialogsContainer";
import Profile from "./profile/Profile";
import UsersContainer from "./users/UsersContainer";
import Settings from "./settings/Settings";
import Music from "./music/Music";
import News from "./news/News";

const MainContent = () => {
  return (
    <main className='content'>
      <Route path='/dialogs' render={() => <DialogsContainer/>}/>
      <Route exact path='/profile' component={Profile}/>
      <Route exact path='/users' component={UsersContainer}/>
      <Route exact path='/news' component={News}/>
      <Route exact path='/music' component={Music}/>
      <Route exact path='/settings' component={Settings}/>
    </main>
  )
};

export default MainContent;
