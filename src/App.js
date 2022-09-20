import React from 'react'
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import MainPage from './Componentes/MainPage/MainPage';
// import ViewGroup from './Componentes/Contacts/ViewGroup/ViewGroup';

import RegisterContacts from './Componentes/Contacts/RegisterContacts/RegisterContacts';
import UpdateContacts from './Componentes/Contacts/UpdateContacts/UpdateContacts'
import ListContacts from './Componentes/Contacts/ListContacts/ListContacts';



function App() {
  return (
    <>
    <Routes>
      <Route path={'/'}element={<Navigate to={'/groups/main'}/>}/>
      <Route path={'/groups/main'}element = {<MainPage/>}/>
      <Route path={'/groupsContacts/view/:groupsId'}element ={<ListContacts/>}/>

      {/* rotas contatos */}
      <Route path={'/RegisterContacts/:groupsId'}element={<RegisterContacts />} />
      <Route path={'/Updatecontacts/:groupsId/edit/:UpdateContactsId'}element={<UpdateContacts />} />
    </Routes>
    </>
  );
}

export default App;
