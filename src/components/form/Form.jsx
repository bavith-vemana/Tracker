import { useEffect, useState, useContext } from "react";
import styles from "./Form.module.css";
import sty from './Button.module.css';
import { useNavigate, useLocation } from "react-router-dom";
import Cal from "./Cal";
import { DataContext } from "../../App";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const navigate = useNavigate();
  const [cityName, setCityName] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [newdata, setNewdata] = useState(null);
  const [custdata, setCustdata] = useContext(DataContext);
  const location = useLocation();
  const { lat = 0, lng = 0 } = location.state || {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setCityName(jsonData.city);
        setNewdata(jsonData); // Set city name directly from jsonData
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (lat !== null && lng !== null) {
      fetchData();
    }
  }, [lat, lng]);

  const handleAdd = (e) => {
    e.preventDefault();
    const newRecord = {
      "cityName": newdata.city,
      "country": newdata.countryName, // You can set country here if needed
      "emoji": newdata.countryCode, // You can set emoji here if needed
      "date": date.toISOString(),
      "notes": notes,
      "position": {
        "lat": lat,
        "lng": lng
      },
      "id": custdata.length+1 // Generate a random ID for now
    };
    console.log(newRecord);
    setCustdata([...custdata, newRecord]);
    navigate("/app/cities");
  };

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <Cal id="date" date={date} setDate={setDate}/>
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <button className={`${sty.btn}  ${sty.primary}`} onClick={handleAdd}>+</button>
        <button className={`${sty.btn}  ${sty.primary}`} onClick={() => { navigate("/app/cities");; }}>&larr;</button>
      </div>
    </form>
  );
}

export default Form;

