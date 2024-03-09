import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './Cal.css';
function Cal({date,setDate}) {
    const dateChange = (newdate) => {
        setDate(newdate);
    };

    const toggleShow = (e) => {
        e.preventDefault();
        setShow(!show); // Toggle the value of 'show'
    };
    const [show,setShow] = useState(false);
    console.log(date);
    return (
        <div>
            <button onClick={toggleShow} style={{ width: '12vh', backgroundColor: '#d6dee0' }}>{date.toLocaleDateString()}</button> {/* Use toggleShow function */}
            {show && <Calendar onChange={dateChange} value={date} onClickDay={()=>{setShow(false)}}style={{
                        backgroundColor: '#f7f7f7',
                        color: 'black'
                    }}></Calendar>}
        </div>
    );
}

export default Cal;
