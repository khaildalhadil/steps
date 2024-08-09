import './index.css'
import {useState} from 'react';

const messages = [
  'تعلم رياكت ⚛️',
  'قدم على وظيفة 💼',
  'عيش انجوي  🤑',
];


export default function App() {

  const [step, setCount] = useState(1);

  const btnStyle = {background: "#7950f2", color: '#fff'}
  
  const previous = ()=> {
    if (step <= 1) return
    setCount(step-1)
  }
  
  const next = ()=> {
    if (step >= 3) return
    setCount(step + 1)
  } 
  
  console.log(step)


  return (
    <div className="steps" >

      <div className='numbers' >
        <div className={step >= 1? 'active': ''} >1</div>
        <div className={step >= 2? 'active': ''} >2</div>
        <div className={step >= 3? 'active': ''} >3</div>
      </div>

      <p className="message" >الخطوه {step}: {messages[step - 1]}</p>

      <div className="buttons" >
        <button style={btnStyle} onClick={previous} >Previous</button>
        <button style={btnStyle} onClick={next} >Next</button>
      </div>

    </div>
  )
}

