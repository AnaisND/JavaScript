import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.js';
import HomeLoggedMan from './Pages/HomeLoggedManager.js';
import HomeLoggedUser from './Pages/HomeLoggedUtilizator.js';
import ClientForm from './Pages/Components/SignUpFormClient.js';
import UserForm from './Pages/Components/SignUpFormUtilizator.js';
import ConfirmPage from './Pages/Components/ChoiceClient.js';
import ManagerForm from './Pages/Components/SignupFormManager.js';
import HotelForm from './Pages/Components/HotelForm.js';
import DisplayHotelsForm from './Pages/Components/DisplayFormHotel.js';
import RoomForm from './Pages/Components/CameraForm.js';
import LoginManagerForm from "./Pages/Components/LoginFormManager.js";
import LoginUserForm from "./Pages/Components/LoginFormUtilizator.js";
import LoginForm from './Pages/Components/LoginForm.js';
import DisplayHotelsFormClient from './Pages/Components/DisplayClientFormHotel.js';
import UpdateRoomForm from './Pages/Components/UpdateFormCamera.js';
import DisplayHotelsFormStele from './Pages/Components/DisplayFormHotelStele.js';
import DisplayHotelsFormAnimale from './Pages/Components/DisplayFormHotelAnimale.js';
import DisplayHotelsFormRestaurant from './Pages/Components/DisplayFormHotelRestaurant.js';
import DisplayHotelsFormf1 from './Pages/Components/DisplayFormHotelf1.js';
import DisplayHotelsFormf2 from './Pages/Components/DisplayFormHotelf2.js';
import DisplayHotelsFormf3 from './Pages/Components/DisplayFormHotelf3.js';
import DisplayHotelsFormf4 from './Pages/Components/DisplayFormHotelf4.js';
import DisplayHotelsFormAdresa from './Pages/Components/DisplayFormHotelAdresa.js';
import DisplayHotelsFormSteleC from './Pages/Components/DisplayClientFormHotelStele.js';
import DisplayHotelsFormRestaurantC from './Pages/Components/DisplayClientFormHotelRestaurant';
import DisplayHotelsFormAnimaleC from './Pages/Components/DisplayClientFormHotelAnimale.js';
import DisplayHotelsFormf1C from './Pages/Components/DisplayClientFormHotelf1.js';
import DisplayHotelsFormf2C from './Pages/Components/DisplayClientFormHotelf2.js';
import DisplayHotelsFormf3C from './Pages/Components/DisplayClientFormHotelf3';
import DisplayHotelsFormf4C from './Pages/Components/DisplayClientFormHotelf4.js';
import DisplayHotelsFormAdresaC from './Pages/Components/DisplayClientFormHotelAdresa.js';
import SearchHotelForm from './Pages/Components/SearchHotelForm.js';
import SearchHotelFormC from './Pages/Components/SearchHotelFormClient.js';
import SearchHotelAdresa from './Pages/Components/SearchHotelAdresa.js';
import SearchHotelAdresaC from './Pages/Components/SearchHotelAdresaClient.js';
import DeleteUser from './Pages/Components/DeleteUser.js';
import DeleteManager from './Pages/Components/DeleteManager.js';
import UpdateUserForm from './Pages/Components/UpdateFormUtilizator.js';
import UpdateManagerForm from './Pages/Components/UpdateFormManager.js';
import UpdateHotelForm from './Pages/Components/UpdateFormHotel.js';
import RoomListComponentClient from './Pages/Components/DisplayCameraClient.js';
import RoomListComponentHotel from './Pages/Components/DisplayCameraHotel.js';
import GetUserForm from './Pages/Components/GetUser.js';
import GetManagerForm from './Pages/Components/GetManager.js';
import Er1 from './Pages/Components/LoginErrorMan.js';
import Er2 from './Pages/Components/LoginErrorUser.js';


function App()
{
  return (
    <div>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/client/:hotelId" element={<ClientForm />} />
         <Route path="/confirm/:hotelId" element={<ConfirmPage />} />
         <Route path="/user/:hotelId" element={<UserForm />} />
         <Route path="/manager" element={<ManagerForm />} />
         <Route path="/hotel/:managerId" element={<HotelForm />} />
         <Route path="/hotels" element={<DisplayHotelsForm />} />
         <Route path="/hotelss/:clientId" element={<DisplayHotelsFormClient />} />
         <Route path="/infoUser/:clientId" element={<GetUserForm />} />
         <Route path="/deleteUser/:clientId" element={<DeleteUser />} />
         <Route path="/updateUser/:clientId" element={<UpdateUserForm />} />
         <Route path="/DisplayRoomsUser/:clientId" element={<RoomListComponentClient />} />
         <Route path="/room/:hotelId/:clientId" element={<RoomForm />} />
         <Route path="/loginManager" element={<LoginManagerForm />} />
         <Route path="/homeManager/:managerId" element={<HomeLoggedMan />} />
         <Route path="/homeManager/-1" element={<Er1 />} />
         <Route path="/loginUser" element={<LoginUserForm />} />
         <Route path="/infoManager/:managerId" element={<GetManagerForm />} />
         <Route path="/deleteManager/:managerId" element={<DeleteManager />} />
         <Route path="/updateManager/:managerId" element={<UpdateManagerForm />} />
         <Route path="/updateHotel/:hotelId" element={<UpdateHotelForm />} />
         <Route path="/DisplayRoomsHotel/:managerId" element={<RoomListComponentHotel />} />
         <Route path="/homeUser/:clientId" element={<HomeLoggedUser />} />
         <Route path="/homeUser/-1" element={<Er2 />} />
         <Route path="/login" element={<LoginForm />} />
         <Route path="/uproom/:cameraId" element={<UpdateRoomForm/>}/>
         <Route path="/hotelsstele/:stele" element={<DisplayHotelsFormStele />} />
         <Route path="/hotelsrestaurant" element={<DisplayHotelsFormRestaurant />} />
         <Route path="/hotelsanimale" element={<DisplayHotelsFormAnimale />} />
         <Route path="/hotelsf1" element={<DisplayHotelsFormf1 />} />
         <Route path="/hotelsf2/:stele" element={<DisplayHotelsFormf2 />} />
         <Route path="/hotelsf3/:stele" element={<DisplayHotelsFormf3 />} />
         <Route path="/hotelsf4/:stele" element={<DisplayHotelsFormf4 />} />
         <Route path="/hotelsadresa/:adresa" element={<DisplayHotelsFormAdresa />} />
         <Route path="/hotelssstele/:clientId/:stele" element={<DisplayHotelsFormSteleC />} />
         <Route path="/hotelssrestaurant/:clientId" element={<DisplayHotelsFormRestaurantC />} />
         <Route path="/hotelssanimale/:clientId" element={<DisplayHotelsFormAnimaleC />} />
         <Route path="/hotelssf1/:clientId" element={<DisplayHotelsFormf1C />} />
         <Route path="/hotelssf2/:clientId/:stele" element={<DisplayHotelsFormf2C />} />
         <Route path="/hotelssf3/:clientId/:stele" element={<DisplayHotelsFormf3C />} />
         <Route path="/hotelssf4/:clientId/:stele" element={<DisplayHotelsFormf4C />} />
         <Route path="/hotelssadresa/:clientId/:adresa" element={<DisplayHotelsFormAdresaC />} />
         <Route path="/search" element={<SearchHotelForm />} />
         <Route path="/searchh/:clientId" element={<SearchHotelFormC />} />
         <Route path="/searchadresa" element={<SearchHotelAdresa />} />
         <Route path="/searchhadresa/:clientId" element={<SearchHotelAdresaC />} />
       </Routes>
     </div>
   );
}
 
 export default App;