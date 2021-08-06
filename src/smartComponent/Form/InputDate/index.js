import React, {useState, useRef, useEffect} from 'react';
import propTypes from "prop-types";
import {DateRange} from "react-date-range";

import "./index.scss";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import formatDate from "utils/formatDate";
import iconCalendar from "../../../assets/icons/ic_calender copy.svg";


export default function Date(props) {
  
  const { value, placeholder, name } = props;
  const [isShowed, isSetShowed] = useState(false); 
  
  const datePickerChange = value =>{
    const target = {
      target:{
        value: value.selection,
        name: name
      }
    };
    props.onChange(target);
  };

  useEffect(()=>{
    document.addEventListener("mousedown", handleClickOutside);
    
    return ()=>{
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const refDate = useRef(null);
  const handleClickOutside = event =>{
    if(refDate && !refDate.current.contains(event.target)){
      isSetShowed(false);
    }
  };

  const check = focus =>{
    focus.indexOf(1) <0 && isSetShowed(false);
  };

  const displayDate = `${value.startDate ? formatDate(value.startDate) : ""}${value.endDate ? " - " + formatDate(value.endDate) : "" 
  }`;

  return (
    <div
      ref={refDate}
      className={["input-date mb-3", props.outerClassName].join(" ")}
    >
      <div className="input-group">
        <div className="input-group-prepend bg-gray-900">
          <span className="input-group-text">
            <img src={iconCalendar} alt="icon calendar" style={{width: 30}} />
          </span>
        </div>
        <input 
          readOnly
          type="text"
          className="form-control"
          value={displayDate}
          placeholder={placeholder}
          onClick={()=> isSetShowed(!isShowed)}
        />
        {isShowed && (
          <div className="date-range-wrapper">
            <DateRange 
              editableDateInputs={true}
              onChange={datePickerChange}
              moveRangeOnFirstSelection={false}
              onRangeFocusChange={check}
              ranges={[value]}
            />
          </div>
        )}
      </div>
      
    </div>
  )
}

Date.propTypes={
  value: propTypes.object,
  onChange: propTypes.func,
  placeholder: propTypes.string,
  outerClassName: propTypes.string
}