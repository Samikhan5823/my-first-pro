// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { addTodo, deleteTodo, removeTodo } from '../action/TodoAction'
// function Tab4() {
//   const [inputData, setInputData] = useState('')
//   const dispatch = useDispatch()
//   const list = useSelector((state) => state.todoReducer.list)
//   return (
//     <div className="container">
//       <h2>Add Item</h2>
//       <div>
//         <input
//           type="text"
//           value={inputData}
//           onChange={(e) => setInputData(e.target.value)}
//         />
//         <button onClick={() => dispatch(addTodo(inputData), setInputData(''))}>
//           Add
//         </button>
//       </div>
//       <div>
//         {list.map((el) => {
//           return (
//             <div>
//               <h3>{el.data}</h3>
//               <button onClick={() => dispatch(deleteTodo(el.id))}>
//                 Delete
//               </button>
//             </div>
//           )
//         })}
//       </div>
//       <div>
//         <h3>Delete All</h3>
//         <button onClick={() => dispatch(removeTodo())}>Delete</button>
//       </div>
//     </div>
//   )
// }

// export default Tab4

import { useRef, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
 import {BiMicrophone} from "react-icons/bi";
import './tab4.css'
function Tab4() {
  const commands = [
    {
      command: "open *",
      callback: (website) => {
        window.open("http://" + website.split(" ").join(""));
      },
    },
    {
      command: "change background colour to *",
      callback: (color) => {
        document.body.style.background = color;
      },
    },
    {
      command: "reset",
      callback: () => {
        handleReset();
      },
    },
    ,
    {
      command: "reset background colour",
      callback: () => {
        document.body.style.background = `rgba(0, 0, 0, 0.8)`;
      },
    },
  ];
  const { transcript, resetTranscript } = useSpeechRecognition({ commands });
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="mircophone-container">
        Browser is not Support Speech Recognition.
      </div>
    );
  }
  const handleListing = () => {
    setIsListening(true);
    microphoneRef.current.classList.add("listening");
    SpeechRecognition.startListening({
      continuous: true,
    });
  };
  const stopHandle = () => {
    setIsListening(false);
    microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();
  };
  const handleReset = () => {
    stopHandle();
    resetTranscript();
  };
  return (
    <div className="microphone-wrapper">
      <div className="mircophone-container">
        <div
          className="microphone-icon-container"
          ref={microphoneRef}
          onClick={handleListing}
        >
          <img src={BiMicrophone} className="microphone-icon" />
        </div>
        <div className="microphone-status">
          {isListening ? "Listening........." : "Click to start Listening"}
        </div>
        {isListening && (
          <button className="microphone-stop btn" onClick={stopHandle}>
            Stop
          </button>
        )}
      </div>
      {transcript && (
        <div className="microphone-result-container">
          <div className="microphone-result-text">{transcript}</div>
          <button className="microphone-reset btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
export default Tab4;

// import React, { useState, useEffect } from 'react'
// import { BiMicrophone } from 'react-icons/bi'

// const SpeechRecognition =
//   window.SpeechRecognition || window.webkitSpecchRecognition

//      const mic = new SpeechRecognition()

// mic.continous = true
// mic.interimResults = true
// mic.lang = 'en-US'
// function Tab4() {
//   const [isListening, setIsListening] = useState(false)
//   const [note, setNote] = useState(null)
//   const [saveNotes, setSaveNotes] = useState([])
//   useEffect(() => {
//     handleListen()
//   }, [isListening])

//   const handleListen = () => {
//     if (!isListening) {
//       mic.start()
//       mic.onend = () => {
//         mic.start()
//       }
//     } else {
//       mic.stop()
//       mic.onend = () => {
//         console.log()
//       }
//     }
//     mic.onstart = () => {}
//     mic.onresult = (e) => {
//       const transcript = Array.from(e.results)
//         .map((result) => result[0])
//         .map((result) => result.transcript)
//         .join('')
//       mic.onerror = (e) => {}
//     }
//   }
//   handleSaveNotes = () => {
//     setSaveNotes([...saveNotes, note])
//     setNote('')
//   }
//   return (
//     <>
//       <h1> Voice Notes</h1>
//       <div className="container">
//         <div className="box">
//           <h2>Notes</h2>
//           {isListening ? <BiMicrophone /> : ''}
//           <button onClick={handleSaveNotes} disabled={!note}>
//             Save{' '}
//           </button>
//           <button onClick={() => setIsListening((prevState) => !prevState)}>
//             Start/Stop{' '}
//           </button>
//           <p>{note}</p>
//         </div>
//         <div className="box">
//           <h2>Notes</h2>
//           {saveNotes.map((n) => (
//             <p key={n}> {n}</p>
//           ))}
//         </div>
//       </div>
//     </>
//   )
// }

// export default Tab4
