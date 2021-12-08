import logo from './logo.svg';
import './App.css';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';




const words = ['AAAAA', 'BBBBB','CCCCC','DDDDD','EEEEEE', 'FFFFFF','GGGGGG','HHHHHH','IIIIII','KKKKKK'];
function App() {


  const [styl, setStyle] = useState(0);// biến đánh dấu đúng sai (0: chưa xác định, 1: đúng, 2: sai)
  const [timer, setTimer] = useState(); // hàm setTimeOut đếm ngược thời gian
  const [counter, setCounter] = useState(10);//  // biến đếm giây
  const [score, setScore] = useState(0);
  const [wordNumber, setWordNumber] = useState(1);// biến câu hỏi hiện tại
   // biến lưu word hiện tại
  const [word, setWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );
  const [newWord, setNewWord] = useState("");
  const [answer, setAnswer] = useState("_");

  const display = (symbol) => {
    if (symbol) {
      setAnswer((prev) => prev.replace("_", symbol));
    }
  };

  useEffect(() => {
     // xử lý khi hết thời gian 10s
    if (counter === 0) {
      setStyle(2)
      setNewWord(word)
      setTimeout(() => {
        setWordNumber((prev) => prev + 1);
        setWord(words[Math.floor(Math.random() * words.length)]);
        setStyle(0);
        setCounter(10);
      }, 2000);
      return;
    }
     // tự động giảm counter sau mỗi 1s
  const x =  setTimer(
      
      setTimeout(() => {
        setCounter(counter - 1);
      }, 1000)
    );
    return () => {
      clearTimeout(x);
    }
  }, [counter]);


   // hàm xử lý khi người dùng nhập vào từ bàn phím
  useEffect(() => {
    // kiểm tra xem còn khuyết chữ hay không? nếu không thì xử lý
    if (answer.includes("_") === false) {
      if (answer === word) {
        setStyle(1);
        // alert("Bạn đã trả lời đúng!");
        setScore((prev) => prev + 10);
        setNewWord(word);
      } else {
        setStyle(2);
        setNewWord(word);
        // alert("Sai! Đáp án đúng là: " + word)
      }
      
      setTimeout(() => {
        setWordNumber((prev) => prev + 1);
        setWord(words[Math.floor(Math.random() * words.length)]);
        setStyle(0);
        setCounter(10);
      }, 3000);
      clearTimeout(timer);
      return;
    }
  }, [answer]);


   // hàm tạo chữ khuyết mỗi khi word thay đổi
  useEffect(() => {
    const arr = word.split("");
    const newArr = arr.map((item, index) => {
      if (index === 0) {
        return item;
      } else if (index === 1) {
        return "_";
      } else {
        const i = Math.floor(Math.random() * 5);
        if (i === 1) {
          return "_";
        } else return item;
      }
    });
    setNewWord(newArr.join(""));
  }, [word]);

    // thay đổi answer hiển thị theo newWord
  useEffect(() => {
    if (styl === 0){
      if (newWord) setAnswer(newWord);
    }
    
  }, [newWord]);

  // hiện modal khi số câu hỏi vượt quá 10
  useEffect(() => {
    if (wordNumber === 11) {
      setWordNumber(1);
      setCounter(10);
      setScore(0);
      return alert("Điểm của bạn là: " + score);
    }
  }, [wordNumber]);


  return (
    <div className="App">
      <div className="container">
        <div id="menu">
          <div className="row">
          <div className="col-4 mx-auto" id="score">
          <p>SCORE:  {score}</p>
         
        </div>
        <div className="col-4 text-center" id="wordNumber">
          {wordNumber} / 10
          <div className="fs-2">{styl === 1 ? <i className="fas fa-check-circle" style={{color: "green"}}></i>: styl === 2 ? <i className="fas fa-times-circle" style={{color: "red"}}></i> : ""}</div>
        </div>
            <div className="col-4 text-end" id="timer">
          <p>TIMER: {counter}</p>
          
        </div>
          </div>
        </div>
        <div id="body">
      <div className="container">
      <div className="input-group ">
          <input
            type="text"
            style={{ backgroundColor: "#211945", color: "white" }}
            className="form-control text-center fs-3 me-5 ms-5"
            value={answer}
            disabled
          />
          
        </div>
      
          <div className="body_between">
            <div className="between-button">
            <Button variant="light" onClick={() => display("A")} value="A">A</Button>
            <Button variant="light" onClick={() => display("B")} value="B">B</Button>
            <Button variant="light" onClick={() => display("D")} value="D">D</Button>
            <Button variant="light" onClick={() => display("C")} value="C">C</Button>
            <Button variant="light" onClick={() => display("E")} value="E">E</Button>
            <Button variant="light" onClick={() => display("F")} value="F">F</Button>
            <Button variant="light" onClick={() => display("G")} value="G">G</Button>
            <Button variant="light" onClick={() => display("H")} value="H">H</Button>
            <Button variant="light" onClick={() => display("I")} value="I">I</Button>
            <Button variant="light" onClick={() => display("J")} value="J">J</Button>
            <Button variant="light" onClick={() => display("K")} value="K">K</Button>
            <Button variant="light" onClick={() => display("L")} value="L">L</Button>
            <Button variant="light" onClick={() => display("M")} value="M">M</Button>
            <Button variant="light" onClick={() => display("N")} value="N">N</Button>
            <Button variant="light" onClick={() => display("O")} value="O">O</Button>
            <Button variant="light" onClick={() => display("P")} value="P">P</Button>
            
            <Button variant="light" onClick={() => display("Q")} value="Q">Q</Button>
            <Button variant="light" onClick={() => display("R")} value="R">R</Button>
            <Button variant="light" onClick={() => display("S")} value="S">S</Button>
            <Button variant="light" onClick={() => display("T")} value="T">T</Button>
            <Button variant="light" onClick={() => display("U")} value="U">U</Button>
            <Button variant="light" onClick={() => display("V")} value="V">V</Button>
            <Button variant="light" onClick={() => display("W")} value="W">W</Button>
            <Button variant="light" onClick={() => display("X")} value="X">X</Button>
            <Button variant="light" onClick={() => display("Y")} value="Y">Y</Button>
            <Button variant="light" onClick={() => display("Z")} value="Z">Z</Button>

            </div>
            
          </div>
        </div>

        {/* SUB-MIT */}
        <div className="container">
        <div class="body_bottom">
            <h3 >Câu hỏi khác</h3>
          </div>
        </div>
        </div>


        

      </div>
    </div>
  );
}

export default App;
