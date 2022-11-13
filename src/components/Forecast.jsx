import "./Forecast.css";
import React, { useEffect, useState } from "react";

/* open weather API config */
const apiKey = "e61aa27d22eb0b30ab346a9f6441d600";


function Forecast(props) {
  const [date, setDate] = useState([]);
  const [desc, setDesc] = useState([]);
  const [temp, setTemp] = useState([]);
  const [icon, setIcon] = useState([]);
  const [date2, setDate2] = useState([]);
  const [desc2, setDesc2] = useState([]);
  const [temp2, setTemp2] = useState([]);
  const [icon2, setIcon2] = useState([]);
  const [date3, setDate3] = useState([]);
  const [desc3, setDesc3] = useState([]);
  const [temp3, setTemp3] = useState([]);
  const [icon3, setIcon3] = useState([]);
  const [loc, setLoc] = useState([]);
  const [locale, setLocale] = useState(props.local);
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${locale}&appid=${apiKey}&units=metric`;
  
  useEffect(() => {
    setLocale(props.local)
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let resultArray = [
          data.list[3],
          data.list[11],
          data.list[19]
        ]
        console.log(resultArray);
        setIcon(
          'http://openweathermap.org/img/wn/'+resultArray[0].weather[0].icon + '@2x.png'
        )
        setTemp(Math.round(resultArray[0].main.temp))
        setDesc(resultArray[0].weather[0].description)
        
        setIcon2(
          'http://openweathermap.org/img/wn/'+resultArray[1].weather[0].icon + '@2x.png'
        )
        setTemp2(Math.round(resultArray[1].main.temp))
        setDesc2(resultArray[1].weather[0].description)

        setIcon3(
          'http://openweathermap.org/img/wn/'+resultArray[2].weather[0].icon + '@2x.png'
        )
        setTemp3(Math.round(resultArray[2].main.temp))
        setDesc3(resultArray[2].weather[0].description)
        
        setDate(resultArray[0].dt_txt.split(' ')[0].replace(/e|-/g, '/').split("/").reverse().join("/"))
        setDate2(resultArray[1].dt_txt.split(' ')[0].replace(/e|-/g, '/').split("/").reverse().join("/"))
        setDate3(resultArray[2].dt_txt.split(' ')[0].replace(/e|-/g, '/').split("/").reverse().join("/"))
      });
  });

  return (
    <div className="forecast">
      <div key={props.locale}className="forecast-container">      
        <p className="date">{date}</p>
        <img className='icone' src={icon} alt="" />
        <h1>{loc}</h1>
        <div className="details">
          <p className="temp">{temp}ºC</p>
          <p className='description'>{desc}</p>
        </div>
      </div>
      <div key={props.locale}className="forecast-container">      
        <p className="date">{date2}</p>
        <img className='icone' src={icon2} alt="" />
        <h1>{loc}</h1>
        <div className="details">
          <p className="temp">{temp2}ºC</p>
          <p className='description'>{desc2}</p>
        </div>
      </div>
      <div key={props.locale}className="forecast-container">      
        <p className="date">{date3}</p>
        <img className='icone' src={icon3} alt="" />
        <h1>{loc}</h1>
        <div className="details">
          <p className="temp">{temp3}ºC</p>
          <p className='description'>{desc3}</p>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
