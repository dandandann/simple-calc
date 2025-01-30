import React, {useState} from 'react'

import './supportstyle.css'

function Support() {
    const [name1Input, set1Name] = useState('')
    const [name2Input, set2Name] = useState('')
    const [emailInput, setEmail] = useState('')
    const [topicInput, setTopic] = useState('')

    const [submit, setSubmit] = useState(false)

     const isFilled = () => {
        return name1Input.trim() !== ''  && name2Input.trim() !== '' 
        && emailInput.trim() !== '' 
        && topicInput.trim() !== ''
     }

     const isSubmitted =  () => {
        if(isFilled()){
            setSubmit(true)
        }
     }

     const randomGen = () => {
        return Math.floor(Math.random() * 1000)
     }
  
  return (
    <div className='mainSupport'>
        <div className='supportContainer'>
            <div className='topSection'>
                <h1>Support Ticket Page</h1>
            </div>
            {submit ? (
                <div className='supportContainer2'>
                    <h1 className='ticketMsg'>Thank you for sending us your report, we will track the problem now</h1>
                    
                    <h4 style={{fontSize: '40px'}}>Ticket number : {randomGen()}</h4>
                </div>
            ) : (
                <div style={{height : '1000px'}}>
                    

                    <div className='botSection'>
                    <div className='infoContainer'>
                        <div className='leftSection'>
                            <p>Name <span className='asterisk'>*</span> </p>
                            <input type='text' className='nameIn' value={name1Input} onChange={(e) => set1Name(e.target.value)}/>
                            <input type='text' className='nameIn' value={name2Input} onChange={(e) => set2Name(e.target.value)}/>
                            <div className='firstandlastname'>
                                <h4>First</h4>
                                <h4>Last</h4>
                            </div>  
                        
                            <p>Email <span className='asterisk'>*</span> </p>
                            <input type='email' className='emailIn' value={emailInput} onChange={(e) => setEmail(e.target.value)}/>
                            
                            <p>Topic <span className='asterisk'>*</span> </p>

                            <textarea className='topicIn' value={topicInput} onChange={(e) => setTopic(e.target.value)}></textarea>
                        </div>

                        <div className='rightSection'>
                            <p>Description <span className='optional'>optional</span></p>
                            <textarea className='descIn'></textarea>



                            <button 
                            className={`submit ${isFilled() ? 'enabled' : 'disabled'}`} disabled={!isFilled()} onClick={isSubmitted}>
                                Send</button>
                        </div>

                    
                    </div>

                    </div>

                </div>

            )}
            
        </div>
        
    </div>
  )
}

export default Support



