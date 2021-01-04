import React from "react";
import {Route} from "react-router-dom";

// Component
import Profile from "./profile/Profile";
import Settings from "./settings/Settings";
import Music from "./music/Music";
import News from "./news/News";
import DialogsContainer from "./dialogs/DialogsContainer";

const MainContent = () => {
  return (
    <main className='content'>
      <Route path='/dialogs' render={DialogsContainer}/>
      <Route exact path='/profile' render={Profile}/>
      <Route exact path='/news' component={News}/>
      <Route exact path='/music' component={Music}/>
      <Route exact path='/settings' component={Settings}/>
    </main>
  )
};

export default MainContent;
