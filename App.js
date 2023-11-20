import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import GLogin from './GoogleLogin';
import Choice from './Pages/Choice';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import NotesComponent from './Pages/Searchnotes';
import OwnNotesComponent from './Pages/Searchyournotes';
import Viewnote from './Pages/Viewnote';
import Viewyournote from './Pages/Viewyournote';
import CreateNote from './Pages/Createnote';
import AddTagChoice from './Pages/Addtagchoice';
import CreateTag from './Pages/Createtag';
import CreateAttachment from './Pages/Createattachment';
import ViewAttachments from './Pages/ViewAttachments';
import NotesByCourse from './Pages/SearchNotesByCourse';
import NotesByText from './Pages/SearchNotesByText';
import NotesByTag from './Pages/SearchNotesByTag';
import NotesByUser from './Pages/SearchNotesByUser';
import NotesByDate from './Pages/SearchNotesByDate';
import SearchPageCourse from './Pages/SearchBarCourse';
import SearchPageText from './Pages/SearchBarText';
import SearchPageTag from './Pages/SearchBarTag';
import SearchPageUser from './Pages/SearchBarUser';
import SearchPageDate from './Pages/SearchBarDate';
import ChangePasswordForm from './Pages/ChangePassword';
import UpdateNoteForm from './Pages/Updatenote';
import CreateGroup from './Pages/Creategroup';
import ViewGroup from './Pages/Viewgroup';
import AddParticipant from './Pages/Addparticipant';
import ViewYourGroups from './Pages/Viewyourgroups';
import UserGroupsForm from './Pages/ViewGroups';
import CreateGroupnote from './Pages/Creategroupnote';
import ViewGroupNotes from './Pages/Viewgroupnotes';
import Groups from './Pages/GroupPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Choice/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/glogin' element={<GLogin/>}/>
        <Route path='/home/:userId' element={<Home/>}/>
        <Route path='/grouphome/:userId' element={<Groups/>}/>
        <Route path='/profile/:userId' element={<Profile/>}/>
        <Route path='/changepass/:userId' element={<ChangePasswordForm/>}/>
        <Route path='/notes/:userId' element={<NotesComponent/>}/>
        <Route path='/searchnotescourse/:userId' element={<SearchPageCourse/>}/>
        <Route path='/searchnotestext/:userId' element={<SearchPageText/>}/>
        <Route path='/searchnotestag/:userId' element={<SearchPageTag/>}/>
        <Route path='/searchnotesuser/:userId' element={<SearchPageUser/>}/>
        <Route path='/searchnotesdate/:userId' element={<SearchPageDate/>}/>
        <Route path='/ownnotes/:userId' element={<OwnNotesComponent/>}/>
        <Route path='/notesbycourse/:userId/:mycoursename' element={<NotesByCourse/>}/>
        <Route path='/notesbytext/:userId/:mytext' element={<NotesByText/>}/>
        <Route path='/notesbytag/:userId/:mytag' element={<NotesByTag/>}/>
        <Route path='/notesbyuser/:userId/:myname' element={<NotesByUser/>}/>
        <Route path='/notesbydate/:userId/:mydate' element={<NotesByDate/>}/>
        <Route path='/ownnote/:userId/:noteId' element={<Viewnote/>}/>
        <Route path='/ownownnote/:userId/:noteId' element={<Viewyournote/>}/>
        <Route path='/updatenote/:userId/:noteId' element={<UpdateNoteForm/>}/>
        <Route path='/createnote/:userId' element={<CreateNote/>}/>
        <Route path='/choicetag/:userId/:noteId' element={<AddTagChoice/>}/>
        <Route path='/createtag/:userId/:noteId' element={<CreateTag/>}/>
        <Route path='/addattch/:userId/:noteId' element={<CreateAttachment/>}/>
        <Route path='/viewattch/:userId/:noteId' element={<ViewAttachments/>}/>
        <Route path='/creategroup/:userId' element={<CreateGroup/>}/>
        <Route path='/yourgroups/:userId' element={<ViewYourGroups/>}/>
        <Route path='/groupsin/:userId' element={<UserGroupsForm/>}/>
        <Route path='/group/:userId/:groupId' element={<ViewGroup/>}/>
        <Route path='/addparticipants/:userId/:groupId' element={<AddParticipant/>}/>
        <Route path='/creategroupnote/:userId/:groupId' element={<CreateGroupnote/>}/>
        <Route path='/viewgroupnotes/:userId/:groupId' element={<ViewGroupNotes/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
