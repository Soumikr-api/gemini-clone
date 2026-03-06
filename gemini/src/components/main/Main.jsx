import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'

const Main = () => {

const { recentPrompts, setRecentPrompts, onSent, showResults, loading, resultData, input, setInput } = useContext(Context);

  return (
    <div className='main'>
        <div className='nav'>
           <p>Gemini</p>
           <img src={assets.user_icon} alt="" />
        </div>

        <div className="main-container">

      {
        !showResults ?
        <>
            <div className="greet">
              <p><span>Hello, User!</span></p>
              <p>How can I assist you today?</p>
            </div>

            <div className="cards">
              <div className="card">
                <p>Suggest me custom Hooks</p>
                <img src={assets.compass_icon} alt="" />
              </div>

              <div className="card">
                <p>Suggest me trip </p>
                <img src={assets.bulb_icon} alt="" />
              </div>

              <div className="card">
                <p>Suggest me flower</p>
                <img src={assets.message_icon} alt="" />
              </div>

              <div className="card">
                <p>Suggest me fruit</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
        </> 
        :
        <div className="result">

          <div className='result-title'>
            <img src={assets.user_icon} alt="" />
            <p>{recentPrompts}</p>
          </div>

          <div className='result-data'>
            <img src={assets.gemini_icon} alt="" />

            {
              loading
              ? <p>Loading...</p>
              : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
            }

          </div>

        </div>
      }

          <div className="main-bottom">
            <div className="search-box">
              <input 
                onChange={(e)=>setInput(e.target.value)} 
                value={input} 
                type="text" 
                placeholder="Enter a prompt here" 
              />

              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
              </div>
            </div>

            <p className='bottom-info'>
              Gemini can make mistakes. Consider checking important information.
            </p>

          </div>
        </div>
    </div>
  )
}

export default Main