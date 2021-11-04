import React, {useState} from 'react'
import Datetime from "react-datetime"
import "react-datetime/css/react-datetime.css";
import "../css/datetime.css";

const DateComponent = () => {
    const [selectDate, setSelectDate] = useState();
    const [duration, setDuration] = useState();
    const [computed, setComputed] = useState('')
    const [error, setError] = useState('')
    const handleChange = (e) => {
        let sDate = new Date(e._d);
        setSelectDate(sDate.getTime())
    }

    const onSubmit = (e) => {
        let parts = duration.split(/:/);
        if (selectDate && parts.length === 3) {
            let timePeriodMillis = (parseInt(parts[0], 10) * 60 * 60 * 1000) +
                   (parseInt(parts[1], 10) * 60 * 1000) + 
                   (parseInt(parts[2], 10) * 1000);     
            let result = new Date();
            result.setTime(selectDate + timePeriodMillis);
            setComputed(result.toLocaleDateString() + " " + result.toLocaleTimeString())       
        }else setError("Invalid format")
    }
    const onChange = (e) => {
        setDuration(e.target.value)
    }
    return (
        <div className="datetime">
            <div >
                <p>Select the Date and Time</p>
                <Datetime onChange={e => handleChange(e)}/>
            </div>
            <div >
                <p>Enter the duration(hrs:mins:secs)</p>
                <input type="text" onChange={e=> onChange(e)} onKeyPress={e => e.key == "Enter" && onSubmit(e)}/>
                <p>{error ? error : "Press enter to submit"}</p>
            </div>
            <div >
                <p>Computed date and time </p>
                <p>{computed}</p>
                
            </div>
        </div>
    )
}

export default DateComponent
