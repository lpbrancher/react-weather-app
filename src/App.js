import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/Weather'
import Forecast from './components/Forecast'

function App() {
  const [locale, setLocale] = useState('porto alegre');
  
  
  function settingsToggle() {
    if (document.getElementById('app-settings').style.opacity == 0){
      document.getElementById('app-settings').style.opacity = 1;
    }
    else {
      document.getElementById('app-settings').style.opacity = 0;
    }
  }

  function changeLocal(event) {
    if(event.keyCode === 13){
      setLocale(event.target.value)
      event.target.value = '';
    }
  }

  window.addEventListener('load', () => {
    let modal = document.getElementsByClassName('modal')[0]
    
    if (localStorage.getItem('modal-okayed') == 'true'){
      modal.style.opacity = 0;
    } else {
      modal.style.opacity = 1;
    }
  });

  function changeTheme() {
    let appVar = document.getElementsByClassName('App')[0]
    if (appVar.classList.contains('light')){
      console.log('its lit fam')
      appVar.classList.remove('light')
      appVar.classList.add('dark')
    } else {
      console.log('dim the lights mon')
      appVar.classList.add('light')
      appVar.classList.remove('dark')
    }
  }

  function hideModal() {
    let modal = document.getElementsByClassName('modal')[0]
    modal.style.opacity = 0;
    localStorage.setItem('modal-okayed', true)
  }

  return (
    <div className="App light">
      <div className='app-header'>
        <div className='logo-container'>
          <i class="logo fa-solid fa-poo-storm"></i>
          <h1>weather.app</h1>
        </div>
        <div className='settings-container'>
        <button onClick={changeTheme} id='change-theme-btn'>
          <i className="fa-solid fa-lightbulb"></i>
        </button>

        <button onClick={settingsToggle} id='change-btn'>
          <i className="fa-solid fa-gear"></i>
        </button>
        
          <div id='app-settings'>
            <p>Actual location is '{locale}'</p>
            <p>Change location:</p>          
            <input
            id='change-local-input'
            className='input'
            onKeyUp={changeLocal}
            />
          </div>
        </div>
        
           
       </div> 
      <Weather key={locale} local={locale} />
      <Forecast key={locale *2} local={locale} />

      <div className='modal'>
        <p>
          To change the location, use the settings button in the top right. <br />
          This site doesn't use cookies at all.
        </p>
        <button onClick={hideModal}>OK</button>
      </div>

      <div title='See on Github' className='github-container'>
        <a target='_blank' href='https://github.com/criptoluiz'>
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  );
}

export default App;