import { DataContext } from "../../App";
import { useContext } from "react";
import styles from './CountryList.module.css'
import CountryItem from "./CountryItem";


function CountryList() {
  const [ custdata, setCustdata ] = useContext(DataContext);

  return (
    <ul className={styles.countryList}>
      {custdata.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
