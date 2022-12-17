import { useEffect } from "react";
import { useState } from "react";
import "../app.css";
import useSound from "use-sound";
import play from "../assets/src_sounds_play.mp3";
import wait from "../assets/src_sounds_wait.mp3";
import wrong from "../assets/src_sounds_wrong.mp3";
import correct from "../assets/src_sounds_correct.mp3";

function Quiz({ data, setStop, setQuestionNumber, questionNumber }) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  const [letsPlay] = useSound(play);
  const [wrongAnswer] = useSound(wrong);
  const [correctAnswer] = useSound(correct);
  const [waitAnswer] = useSound(wait);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");

    setTimeout(() => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
    }, 3000);

    setTimeout(() => {
      correctAnswer();

      setTimeout(() => {
        if (a.correct) {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        } else {
          wrongAnswer();
          setTimeout(() => {
            setStop(true);
          }, 1000);
        }
      }, 5000);
    }, 6000);
  };
  return (
    <div className="quiz">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => {
          return (
            <div
              key={a.text}
              className={selectedAnswer === a ? className : "answer"}
              onClick={() => handleClick(a)}
            >
              {a.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Quiz;
