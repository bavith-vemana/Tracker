// import styles from "./CityItem.module.css";
// import { Link } from "react-router-dom";

// const formatDate = (date) =>
//   new Intl.DateTimeFormat("en", {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//   }).format(new Date(date));

// function CityItem({ city,setCustdata }) {
//   const { cityName, emoji, date, id, position } = city;

  

//   return (
//     <Link to={`${id}?lat=${position.lat}&lng=${position.lng}`} style={{color:'grey'}} className={styles.cityItem}>
      
//         <span className={styles.emoji}>{emoji}</span>
//         <h3 className={styles.name}>{cityName}</h3>
//         <time className={styles.date}>({formatDate(date)})</time>
//         <button className={styles.deleteBtn} onClick={()=>{
//           const updatedData = custdata.filter((city) => city.cityName !== cityName);
//           setCustdata("city"+updatedData);
//         }}>
//           &times;
//         </button>
//     </Link>
//   );
// }

// export default CityItem;

import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city,custdata,setCustdata }) {
  const handleDeleteCity = (id) => {
    setCustdata(prev => prev.filter(itm => itm.id != id));
  };

  const { cityName, emoji, date, id, position } = city;

  return (
    <Link to={`${id}?lat=${position.lat}&lng=${position.lng}`} style={{ color: 'grey' }} className={styles.cityItem} >
      {/* <span className={styles.emoji}>{emoji}</span> */}
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>({formatDate(date)})</time>
      <button
        className={styles.deleteBtn}
        onClick={() => {handleDeleteCity(id)}}
      >
        &times;
      </button>
    </Link>
  );
}

export default CityItem;
