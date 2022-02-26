import React, {useState, useEffect} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBListGroupItem } from "mdbreact";
import star from '../star.png'
import Lottie from 'react-lottie';
import time from '../assests/time.json';
import won from '../assests/won.json';
import sad from '../assests/sad.json';
import { Link } from "react-router-dom";
import DataService from "../services/database"
import sadGIf from '../assests/sad.gif';
import audio from '../assests/onclick.mp3';
import lostAudio from '../assests/lost.mp3';
import rightAudio from '../assests/right.mpeg';
import claps from '../assests/claps.wav';
import logoOld from '../assests/logoOld.png';
import logo from '../pslLogo1.png';
import timeAudio from '../assests/times.wav';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: time,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: won,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: sad,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

var questions = [
    {
        id:1,
        questionText: 'How many worldwide locations of Persistent offices are?',
        answerOptions: [
            { answerText: '45', isCorrect: true },
            { answerText: '25', isCorrect: false },
            { answerText: '50', isCorrect: false },
            { answerText: '47', isCorrect: false },
        ],
    },
    {
        id:2,
        questionText: 'Which site is preferred by Persistent for share there content?',
        answerOptions: [
            { answerText: 'LinkedIn Learning', isCorrect: false },
            { answerText: 'CBT Nuggets', isCorrect: false },
            { answerText: 'Trailhead', isCorrect: true },
            { answerText: 'Cloud Academy', isCorrect: false },
        ],
    },
    {
        id:3,
        questionText: `Persistent named in Forbes Asia's 200 ___`,
        answerOptions: [
            { answerText: 'Best under a million 2021 list', isCorrect: false },
            { answerText: 'Best under a billion 2021 list', isCorrect: true },
            { answerText: 'Best in banking', isCorrect: false },
            { answerText: 'None of above', isCorrect: false },
        ],
    },
    {
        id:4,
        questionText: `Mission of Persistent Systems`,
        answerOptions: [
            { answerText: 'Client Success', isCorrect: true },
            { answerText: 'Company Success', isCorrect: false },
            { answerText: 'Employee Success', isCorrect: false },
            { answerText: 'Our success', isCorrect: false },
        ],
    }, 
    {
        id:5,
        questionText: `Persistent's revenue of 2k19`,
        answerOptions: [
            { answerText: '50 crore USD', isCorrect: false },
            { answerText: '46 crore USD', isCorrect: false },
            { answerText: '60 crore USD', isCorrect: false },
            { answerText: '56 crore USD', isCorrect: true },
        ],
    },
    {
        id:6,
        questionText: 'On which date PSL was incorporated?',
        answerOptions: [
            { answerText: '30th May 1990', isCorrect: true },
            { answerText: '30th June 1991', isCorrect: false },
            { answerText: '16th May 1990', isCorrect: false },
            { answerText: '26th August 1995', isCorrect: false },
        ],
    },
    {
        id:7,
        questionText: 'This logo was introduced in which year?',
        answerOptions: [
          { answerText: '2011', isCorrect: false },
          { answerText: '2007', isCorrect: false },
          { answerText: '2009', isCorrect: true },
          { answerText: '2006', isCorrect: false },
        ],
    },
    {
        id:8,
        questionText:'This logo was introduced in which year?',
        answerOptions: [
          { answerText: '2018', isCorrect: false },
          { answerText: '2017', isCorrect: false },
          { answerText: '2020', isCorrect: false },
          { answerText: '2019', isCorrect: true },
        ],
    },
];
var qData = [];
var jsonfile = questions;
var n=0

    while (n<5) {
      var index = Math.floor(Math.random() * jsonfile.length);
      console.log(index)
      qData.push(jsonfile[index]);
      jsonfile.splice(index, 1)
      n++
    }
    questions = qData


const Question = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(-1)
    const [currentAns, setCurrentAns] = useState(false)
    const [showSubmit, setShowSubmit] = useState(false)
    const [checkAnswer, setCheckAnswer] = useState()
    const [selection, setSelection] = useState("")
    const [showNext, setNext] = useState(false)
    const [disable, setDisable] = useState(false)
    const [seconds, setSeconds] = useState(120);
    const [timeLeft, setTimeLeft] = useState(false)
    const [showQues, setShowQues] = useState(true)
    const [checkWon, setWon] = useState(false)
    const [checkLost, setLost] = useState(false)
    const [name, setName] = useState(localStorage.getItem('user'))

    let lastNumber = 0 
    var Counter = 0

    const Play = () => {
      new Audio(audio).play();
    }

    const PlayLost = () => {
      new Audio(lostAudio).play();
    }

    const PlayRight = () => {
      new Audio(rightAudio).play();
    }

    const PlayWon = () => {
      new Audio(claps).play();
    }

    const PlayTime = () => {
      new Audio(timeAudio).play();
    }
    
    
    
    const setActiveAns = (ans, index) => {
        setSelection("Active")
        setCurrentIndex(index)
        // setCurrentAns(ans)
        setDisable(true)
        setCheckAnswer(checkAnswer)
        checkAns(ans)
      }
 
      useEffect(() => {
        if (seconds > 0) {
          setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
            setShowQues(false)
            setTimeLeft(true)
            PlayTime()
        }
      });

      useEffect(() => {
         
      },[]);

    const getRandNumber = () =>{
        var x = Math.floor((Math.random() * 2) + 1); // get new random number

        if (x === lastNumber) { // compare with last number
          return getRandNumber() // if they are the same, call the function again to repeat the process
        }
        return x // if they're not the same, return it
      }

      const handleQues = () => {
        Play()
        setSelection("")
        setDisable(false)
        console.log(score)
        setShowSubmit(false)
        const nextQuestion = currentQuestion + 1;
            if (nextQuestion < qData.length) {
                setCurrentQuestion(nextQuestion);
            } else {
                PlayWon()
                setWon(true)
                setSeconds(6000)
                setShowSubmit(false)
                setShowQues(false)
                saveUser()
            }
    }

    const checkAns = (ans) => {
        if(ans === true){
            PlayRight()
            setSelection("Right")
            setNext(true)
            setShowSubmit(true)
            setScore(score + 1);
        }
        if(ans === false){
            setSelection("Wrong")
            if(score>=3){
                PlayWon()
                setSeconds(60000)
                setWon(true)
                setShowSubmit(false)
                setShowQues(false)
            }
            else{
              PlayLost()
                setTimeout(() => { 
                    setSeconds(6000)
                    setLost(true)
                    setShowSubmit(false)
                    setShowQues(false)
                    saveUser()
                  }, 800);
            } 
        }
        setCheckAnswer(currentAns)
    }   

 const showStar = () =>{
    let starList = []
        for (var i = 0; i < score; i++) {
            starList.push( 
            <span className="starImg">
            <img src={star} style={{width:'40px', padding:'2%'}}/>
            </span>
            );
        }
        return starList;
 }

    const saveUser = () => {
      let data = {
        name: name,
        points: score,
        type: 1
      };

      DataService.create(data)
        .then(() => {
          console.log("Created new item successfully!");
        })
        .catch((e) => {
          console.log(e);
        });
    }

  return (
      <div className="centerQues">
      {showQues &&
      <>
      <MDBContainer>
      <MDBRow>
      <MDBCol sm="4">
      <div>
         {showStar()}
      </div>
      </MDBCol>
      <MDBCol sm="2">
       </MDBCol>
       <MDBCol sm="1">
       </MDBCol>
      <MDBCol sm="2">
      <div className="hidesm timer">
      Que: {currentQuestion+1}/5
      </div>
       </MDBCol>
       <MDBCol md="3" className="hidemd" sm="12">
       <div className="d-flex mt-3 justify-content-between"> 
       <div className="timer " style={{width:'40%'}}>
       Que: {currentQuestion+1}/5
      </div>
       <div className="timer " style={{width:'40%'}}>
      Timer: {seconds}
      </div> 
       </div> 
       </MDBCol>
       <MDBCol md="3" className="hidesm" sm="12"> 
       <div className="timer " style={{width:'100%'}}>
      Timer: {seconds}
      </div>  
       </MDBCol>
      </MDBRow>
     
      </MDBContainer>
       
      <br/>
      
      <br/>
    
     
    <MDBContainer>
      <MDBRow>
        <MDBCol sm="12">
        <div className="question">
        <span style={{fontWeight:'bold'}}>
        {questions[currentQuestion].questionText}
        <br/>
        {questions[currentQuestion].id === 7 &&
          <img src={logoOld} className="App-logo" alt="logo" />
        }
        {questions[currentQuestion].id === 8 &&
          <img src={logo} className="App-logo" alt="logo" />
        }
        
        </span>
        </div>
        </MDBCol>
      </MDBRow>
      <br />
      <br />
      <MDBRow>
     
      {questions[currentQuestion].answerOptions.map((answerOption, i) => (
        <MDBCol sm="6">
        <MDBListGroupItem  disabled={disable} key={i} className={
                    "answer" +
                    (i === currentIndex ? selection : "")  
                  }
                  onClick={() => setActiveAns(answerOption.isCorrect, i)}>
        {answerOption.answerText}
        </MDBListGroupItem>
        </MDBCol> ))}
    
      </MDBRow> 
      {showSubmit &&
      <button onClick={() => handleQues()} block style={{marginTop:'25px', width:'30%'}} className="button">
      {currentQuestion === 4 ? (<>Finish</>) : (<>Next</>)} 
      </button>}
      {!showSubmit &&
      <button disabled  onClick={() => handleQues()} block style={{marginTop:'25px', width:'30%'}} className="disBtn">
      Next
      </button>}
    </MDBContainer>
      </>}
    {timeLeft &&
        <MDBContainer>
        <MDBRow>
        <MDBCol sm="4">
        </MDBCol>
        <MDBCol sm="4">
        <button className="button typeBtn" style={{marginTop:'4%'}}>
        <div className="pLeft">
        <Lottie 
        options={defaultOptions}
        style={{padding:0,margin:0}}
        height={300}
        width={250}/> 
        </div> 
        </button>
        <Link to={"/selection"}>
        <button className="button typeBtn" style={{marginTop:'4%'}}> 
        <span style={{fontSize:'20px'}}>Try Again</span>
        </button>
        </Link>
        </MDBCol>
        <MDBCol sm="3">
        </MDBCol>
        </MDBRow>
    </MDBContainer>
    }
    {checkWon &&
    <MDBContainer>
        <MDBRow>
        <MDBCol sm="4">
        </MDBCol>
        <MDBCol sm="4">
        <button className="button typeBtn" style={{marginTop:'4%'}}>
        <div className="pLeft">
        <Lottie 
        options={defaultOptions1}
        style={{padding:0,margin:0}}
        height={300}
        width={250}/> 
        </div> 
        </button>
        
        <div className="" style={{marginTop:'12%'}}> 
        {showStar()}
        <Link to={"/selection"}>
        <button className="button typeBtn" style={{marginTop:'8%'}}> 
        Play Again
        </button>
        </Link>
        </div>
       
        </MDBCol>
        <MDBCol sm="3">
        </MDBCol>
        </MDBRow>
    </MDBContainer>}
    {checkLost &&
    <MDBContainer>
        <MDBRow>
        <MDBCol sm="4">
        </MDBCol>
        <MDBCol sm="4">
        <button className="button typeBtn" style={{marginTop:'4%'}}>
        <div className="pLeft">
          <Lottie 
          options={defaultOptions2}
          style={{padding:0,margin:0}}
          height={300}
          width={250}/> 
        </div> 
        </button>
        <Link to={"/selection"}>
        <button className="button typeBtn" style={{marginTop:'4%'}}> 
        <span style={{fontSize:'20px'}}>Try Again</span>
        </button>
        </Link>
        </MDBCol>
        <MDBCol sm="3">
        </MDBCol>
        </MDBRow>
    </MDBContainer>}
    <br/>
    <br/>
    <br/>
    </div>
  );
}

export default Question;


