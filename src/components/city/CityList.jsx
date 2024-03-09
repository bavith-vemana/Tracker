import styles from "./CityList.module.css";
import sty from "./CityItem.module.css";
// import CityItem from "./CityItem";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../App"; // Import DataContext from App.js

function CityList() {
  const [ custdata, setCustdata ] = useContext(DataContext);
  console.log(custdata);

  const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

  const handleDeleteCity = (id) => {
    setCustdata(prev => prev.filter(itm => itm.id != id));
  };

  return (
    <ul className={styles.cityList}>
      {custdata.map((city) => (
        <div className={sty.cityItem} key={city.id} >
        <Link to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}  style={{ textDecoration: 'none', color: 'grey' }} >
            {/* <span className={sty.emoji}>{city.emoji}</span> */}
            <h3 className={sty.name}>{city.cityName}</h3>
            <time className={sty.date}>({formatDate(city.date)})</time>
        </Link>
        <button className={sty.deleteBtn} onClick={() => {handleDeleteCity(city.id)}}>&times;</button>
      </div>
      ))}
    </ul>
  );
}

export default CityList;


{/* <CityItem city={city} key={city.id} custdata={custdata} setCustdata={setCustdata} /> */}
        {/* <button
        className={sty.deleteBtn}
        onClick={() => {
          
          handleDeleteCity(city.id)}}> 
        &times;
        </button> */}