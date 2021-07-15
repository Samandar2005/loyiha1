import React,{useState} from 'react';
import DisplayComponent from './Components/DisplayComponent';
import BinDisplayComponents from './Components/BinDisplayComponents';
import './App.css'


function App(){
  const [time, setTime] = useState({ms:0, s:50, m:59, h:0});

  const[interv, setInterv] = useState();
  const[status, setStatus] = useState(0);

  // const stop = () => {
  //   clearInterval(interv)
  //   setStatus(1);
  // } ;

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  } ;

  var upDatedMs = time.ms, upDatedS = time.s, upDatedM = time.m, upDatedH = time.h;

  const run = () =>{
    if(upDatedM === 60){
      upDatedH++;
      upDatedM = 0;
    }
    if(upDatedS === 60){
      upDatedM++;
      upDatedS = 0;
    }
    if(upDatedMs === 100){
      upDatedS++;
      upDatedMs = 0;
    }

    upDatedMs++;
    return setTime({ms:upDatedMs, s:upDatedS, m:upDatedM, h:upDatedH});
  }

  const stop = () => {
    clearInterval(interv)
    setStatus(2);
  } ;

  const reset = () => {
    clearInterval(interv)
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0});
  } ;
  const resume = () => start();


  return(
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <DisplayComponent time={time} />
          <BinDisplayComponents status={status} resume={resume} reset={reset} stop={stop} start={start} />
        </div>

      </div>
    </div>
  );
}

export default App;