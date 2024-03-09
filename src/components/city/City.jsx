import { useParams, useSearchParams } from "react-router-dom"
import { useContext, useState } from "react";
import {DataContext} from "../../App";
import styles from './City.module.css'

function City() {
    // const citiesData = useContext(DataContext);
    const [ custdata, setCustdata ] = useContext(DataContext);
    const {id}  = useParams();
    const [params,setParams] = useSearchParams();
    const lat = params.get("lat");
    const lng = params.get("lng");
    const cityId = parseInt(id);
    const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
    //console.log(params);
    //const [cityData,setCityData] = useState(null);
    const {emoji,cityName,date} = custdata.find(city => city.id === cityId);
    //console.log(cityData);
    return (
        <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

        </div>
        // <div >
        //     <h1>City {id}</h1>
        //     <h2>{lat}</h2>
        //     <h2>{lng}</h2>
        // </div>
    )
}

export default City
