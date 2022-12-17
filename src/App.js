import "./app.css";

import { useState } from "react";
import Quiz from "./components/Quiz";
import { useEffect } from "react";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState(0);
  const [username, setUserame] = useState(null);

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which material is most dense?",
      answers: [
        {
          text: "Silver",
          correct: false,
        },
        {
          text: "Styrofoam",
          correct: false,
        },
        {
          text: "Butter",
          correct: false,
        },
        {
          text: "Gold",
          correct: true,
        },
      ],
    },

    {
      id: 4,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "On a radio, stations are changed by using what control?",
      answers: [
        {
          text: "Tuning",
          correct: true,
        },
        {
          text: "Volume",
          correct: false,
        },
        {
          text: "Bass",
          correct: false,
        },
        {
          text: "Treble",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Which state in the United States is largest by area?",
      answers: [
        {
          text: "Alaska",
          correct: true,
        },
        {
          text: "California",
          correct: false,
        },
        {
          text: "Texas",
          correct: false,
        },
        {
          text: "Hawaii",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "What is Aurora Borealis commonly known as?",
      answers: [
        {
          text: "Fairy Dust",
          correct: false,
        },
        {
          text: "Northern Lights",
          correct: true,
        },
        {
          text: "Book of ages",
          correct: false,
        },
        {
          text: "a Game of Thrones main character",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Sir Thomas Fearnley Cup is awarded to?",
      answers: [
        {
          text: "1968",
          correct: false,
        },
        {
          text: "1929",
          correct: true,
        },
        {
          text: "1901",
          correct: false,
        },
        {
          text: "1965",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Oscar Awards were instituted in?",
      answers: [
        {
          text: "1998",
          correct: false,
        },
        {
          text: "1989",
          correct: false,
        },
        {
          text: "1979",
          correct: true,
        },
        {
          text: "1800",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "When is the International Workers' Day?",
      answers: [
        {
          text: "1962",
          correct: false,
        },
        {
          text: "1963",
          correct: false,
        },
        {
          text: "1964",
          correct: true,
        },
        {
          text: "1965",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "When did Commander Robert Peary discover the North Pole?",
      answers: [
        {
          text: "1904",
          correct: false,
        },
        {
          text: "1905",
          correct: false,
        },
        {
          text: "1964",
          correct: false,
        },
        {
          text: "1909",
          correct: true,
        },
      ],
    },
    {
      id: 12,
      question: "What is the population density of Kerala?",
      answers: [
        {
          text: "819/sq. km",
          correct: true,
        },
        {
          text: "602/sq. km",
          correct: false,
        },
        {
          text: "415/sq. km",
          correct: false,
        },
        {
          text: "500/sq. km",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "What is the range of missile 'Akash'?",
      answers: [
        {
          text: "4 km",
          correct: false,
        },
        {
          text: "25 km",
          correct: true,
        },
        {
          text: "500 m to 9 km",
          correct: false,
        },
        {
          text: "150 km",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Which part of the body are you most likely to stub?",
      answers: [
        {
          text: "Toe",
          correct: true,
        },
        {
          text: "Knee",
          correct: false,
        },
        {
          text: "Elbow",
          correct: false,
        },
        {
          text: "Brain",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Which country is largest by area?",
      answers: [
        {
          text: "UK",
          correct: false,
        },
        {
          text: "USA",
          correct: false,
        },
        {
          text: "Russia",
          correct: true,
        },
        {
          text: "China",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = [
    { id: 1, amount: "$ 100" },
    { id: 2, amount: "$ 200" },
    { id: 3, amount: "$ 300" },
    { id: 4, amount: "$ 500" },
    { id: 5, amount: "$ 1.000" },
    { id: 6, amount: "$ 2.000" },
    { id: 7, amount: "$ 4.000" },
    { id: 8, amount: "$ 8.000" },
    { id: 9, amount: "$ 16.000" },
    { id: 10, amount: "$ 32.000" },
    { id: 11, amount: "$ 64.000" },
    { id: 12, amount: "$ 125.000" },
    { id: 13, amount: "$ 250.000" },
    { id: 14, amount: "$ 500.000" },
    { id: 15, amount: "$ 1.000.000" },
  ].reverse();

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {stop ? (
              earned === 0 ? (
                <h1 className="failScore">
                  Better luck next time {username} you earn {earned} $
                </h1>
              ) : (
                <h1 className="score">
                  Congratulation {username} you earned {earned}
                </h1>
              )
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>

                <div className="bottom">
                  <Quiz
                    setStop={setStop}
                    data={data}
                    setQuestionNumber={setQuestionNumber}
                    questionNumber={questionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => {
                return (
                  <li
                    key={m.id}
                    className={
                      questionNumber === m.id
                        ? "moneyListItem active"
                        : "moneyListItem"
                    }
                  >
                    <span className="moneyListItemNumber">{m.id}</span>
                    <span className="moneyListItemAmout">{m.amount}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      ) : (
        <Start setUserame={setUserame} />
      )}
    </div>
  );
}

export default App;
