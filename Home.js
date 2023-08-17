import { React } from "react";
import MyNavbar from "./Components/MyNavbar";
import { useNavigate } from "react-router-dom";
import data from './Components/Data/ActualData/FrontData.json';
import ListComponent from "./Components/ListComponent1";
import './StyledPages/Home.css';

function Home(){
    const navigate = useNavigate();
    const handleadisplay = () => {
        navigate(`/hotels`);
      };

    return(
        <div>
            <MyNavbar/>
            <br/>
            <button onClick={handleadisplay} className="custom-button">Search More Hotels</button>
            <br/>
            <ListComponent data={data} />
        </div>
    );
};

export default Home;

/*<button onClick={handleadisplay} className= 'Anais-button'>Cancel</button>*/