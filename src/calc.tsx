import React, { useState } from 'react'
import { useNavigate }  from 'react-router-dom'
import './calcStyle.css'

function Calc() {
    const [value, setValue] = useState('')
    const navigate = useNavigate()
    const [history, setHistory] = useState<string[]>([])

    const clickInput = (input: string) => {
        if (input === 'C') {
            setValue('')
    
          } else if (input === 'DEL') {
            setValue(value.slice(0, -1))
          } else if (input === '=') {
            try {
                if (value.includes('/0')) {
                  throw new Error('error')
                }
                const result = eval(value).toString()
                setHistory([...history, result])
                setValue(result)
              } catch (e) {
                setValue('Err')
              }
          } else {
      
                setValue(value + input)
             
          }
        
    }

    const goSupport = () => {
        navigate('/support')
    }


    return (
        <div className='main'>
            <div className='calc'>
                <div className='topSect'>
                    <div className='history'>
                        {history.map((item, idx) => (
                            <div key={idx} className='historyItem'>{item}</div>
                        ))}
                    </div>
                    
                    <div className='result'>
                        <input type='text' value={value} readOnly/>

                    </div>
                </div>

                <div className='bottomSect'>
                    <button className='btn' onClick={()  => clickInput('C') }>C</button>
                    <button className='btn' onClick={() => clickInput('DEL')}>DEL</button>
                    <button className='btn' style={{backgroundColor : '#856242'}} onClick={ goSupport }>?</button>
                
                    <button className='btnAlt' onClick={()  => clickInput('/') } >/</button>


                    <button className='btn' onClick={()  => clickInput('1') }>1</button>
                    <button className='btn' onClick={()  => clickInput('2') }>2</button>
                    <button className='btn' onClick={()  => clickInput('3') }>3</button>
                
                    <button className='btnAlt' onClick={()  => clickInput('*') } >X</button>


                    <button className='btn' onClick={()  => clickInput('4') } >4</button>
                    <button className='btn' onClick={()  => clickInput('5') } >5</button>
                    <button className='btn' onClick={()  => clickInput('6') } >6</button>
                
                    <button className='btnAlt' onClick={()  => clickInput('-') } >-</button>

                    <button className='btn' onClick={()  => clickInput('7') } >7</button>
                    <button className='btn' onClick={()  => clickInput('8') } >8</button>
                    <button className='btn' onClick={()  => clickInput('9') } >9</button>
                
                    <button className='btnAlt' onClick={()  => clickInput('+') } >+</button>

                    <button className='btnAlt2' id='btnAlt1' onClick={()  => clickInput('0') } >0</button>
                    <button className='btnAlt2' id='btnAlt2' onClick={()  => clickInput('=') } >=</button>
                </div>
            </div>
        </div>
    )
    }

export default Calc