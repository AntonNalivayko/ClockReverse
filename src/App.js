
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  //***************useStates(hour,minutes,seconds,revers,buttonDisable)*************/
  const [hoursToo, setHoursToo] = React.useState(13);
  const [minutesToo, setMinutesToo] = React.useState(29);
  const [seconds, setSeconds] = React.useState(5);
  const [minusState, setMinusState] = React.useState('');
  const [btnWatch, setBtnWatch] = React.useState(false)
  const [disable, setDisable] = React.useState(false);

  /***************************useStates(fixedTime)*******************************/
  const [fixH, setFixH] = React.useState();
  const [fixM, setFixM] = React.useState();
  const [fixS, setFixS] = React.useState();
  const [fixMs, setFixMs] = React.useState();
  const [fixdots, setFixDots] = React.useState('');

  /*******************FunctionsCalulate*************************/

  const secondsPlus = seconds + 1;
  const secondsMinus = minusState - 1;
  const minutMinus = minutesToo - 1;
  const minutPlus = minutesToo + 1;
  const hoursePlus = hoursToo + 1;
  const hourseMinus = hoursToo - 1;

  /********************Handle Function Click****************************/

  const handleFixed = () => {
    setFixH(hoursToo,);
    setFixM(minutesToo,);
    setFixS(seconds);
    setFixMs(minusState);
    setFixDots(':');
  };

  const handleRevers = () => {
    setBtnWatch(true);
    setMinusState(seconds);
    setDisable(true)
  }

  /*************componentDidmount**********************/

  React.useEffect(() => {

    if (btnWatch === true) {

      setTimeout(() => setMinusState(secondsMinus), 1000);
      console.log(btnWatch)
    }
    if (btnWatch === false) {

      setTimeout(() => setSeconds(secondsPlus), 1000);
      console.log(btnWatch)
    }
  });

  /********************Logick Clock*******************/

  if (seconds === 60) {
    setSeconds(0);
    setMinutesToo(minutPlus)
  }
  if (minusState === -1) {
    setMinusState(59);
    setMinutesToo(minutMinus)
  }

  if (minutesToo === 60) {
    setMinutesToo(0);
    setHoursToo(hoursePlus)
  }
  if (minutesToo === 0) {
    setMinutesToo(60);
    setHoursToo(hourseMinus)
  }
  if (hoursToo === 23) {
    setHoursToo('0', 0);

  }

  /*****************Return********************/

  return (
    <div className="App">
      <header className="App-header">
        <div className='boxContent'>
          <div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className='watchBlock' >
            <div className='number'><p>{hoursToo}</p></div>
            <p className='dots'>:</p>
            <div className='number'><p>{minutesToo}</p></div>
            <p className='dots'>:</p>

            {btnWatch === false 
            ?(
              <div className='number'><p>{seconds}</p></div>
            ) : (
              <div className='number'><p>{minusState}</p></div>
            )}

          </div>
          <div className='buttons'>
            <button className='btnFix' onClick={handleFixed}>FIXATION</button>
            <button className='btnRev' disabled={disable} onClick={handleRevers}>REVERSE</button>

          </div>
          <div className='fixBlock'>
           
            {btnWatch === false ? (
              <div className='fixBlock'>
            <div><p>{fixH}</p></div>
            <p>{fixdots}</p>
            <div><p>{fixM}</p></div>
            <p>{fixdots}</p>
            <div><p>{fixS}</p></div>
            </div>
            ) : (
            <div className='fixBlock'>
            <div><p>{fixH}</p></div>
            <p>{fixdots}</p>
            <div><p>{fixM}</p></div>
            <p>{fixdots}</p>
            <div><p>{fixMs}</p></div>
            </div>)}
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
