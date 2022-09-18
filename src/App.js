import React from 'react'
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import MainPage from './Componentes/MainPage/MainPage';
import ViewGroup from './Componentes/Contacts/ViewGroup/ViewGroup';

import RegisterContacts from './Componentes/Contacts/RegisterContacts/RegisterContacts';
import UpdateContacts from './Componentes/Contacts/UpdateContacts/UpdateContacts'



function App() {
  return (
    <>
    <Routes>
      <Route path={'/'}element={<Navigate to={'/groups/main'}/>}/>
      <Route path={'/groups/main'}element = {<MainPage/>}/>
      <Route path={'/groupsContacts/view/:groupsId'}element ={<ViewGroup/>}/>

      {/* rotas contatos */}
      <Route path={'/RegisterContacts'}element={<RegisterContacts />} />
      <Route path={'/Updatecontacts/:UpdateContactsId'}element={<UpdateContacts />} />
    </Routes>
    </>
  );
}

export default App;
