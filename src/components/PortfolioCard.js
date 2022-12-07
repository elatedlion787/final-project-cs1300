import "./PortfolioCard.css"
import React, {useState} from "react"

export default function PortfolioCard(props){
    const [modal, setModal] = useState(false);
    const toggleModal =  () => {
        setModal(!modal)
    }
    if (modal) {
        document.body.classList.add("active-modal")
      } else {
        document.body.classList.remove("active-modal")
    }
    return(
        <div className="portfolio-card">
        <div className='box btn_shadow '>
            <div className='img'>
            <img src={props.head_image} onClick={toggleModal}  alt=''/>
            </div>
            <div className='category flex'>
            <span onClick={toggleModal} >  {props.category}</span>
            </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href='#popup' className='arrow' onClick={toggleModal} >
            <i class='fas fa-arrow-right'></i>
          </a>
        </div>
      </div>
      {/* Popup box */}
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content'>
            <div className='modal-img'>
            {
                
                props.image.map((val, index) =>{
                    
                    return(
                        <div id="image">
                        <img src={val} alt='' />
                        <h4> {props.caption[index]} </h4>
                        </div>
                    )
                })
              }
                {/* <img src={props.image} alt='' />
                <h4> {props.caption} </h4> */}
            </div>
            <div className='modal-text'>
              <span>{props.category}</span>
              <h1>{props.title}</h1>
              <div>
            
                
              <p> <b> Intro </b> </p> 
              <p>{props.intro}</p>
              <p> <b> Project </b> </p> 
              <p>{props.project}</p>
              <p> <b> Methodology </b> </p> 
              
              {
                
                props.method.map((data) =>{
                    
                    return(
                        <p> {data} </p>
                    )
                })
              }
            
              <p> <b> Goals </b> </p> <p> The goals of this project were to
               </p>
               <ul>
                {props.goals.map((data) => {
                    return(
                    <li> {data} </li>
                    )
                })}
               </ul>
              {/* {props.goals.map((data) => {
                return(
                <li> {data} </li>
                )
              })} </ul></p> */}
              <br></br>
              <p> <b> Challenges</b> </p><p>{props.challenges}</p>
              <p> <b> Skills </b> </p> <p>{props.skills}</p>
              <p> <b> Results </b> </p> 
              {
                
                props.results.map((data) =>{
                    
                    return(
                        <p> {data} </p>
                    )
                })
              }
              </div>
              <div className='button'>
                <button className='view-project btn_shadow'>
                  <a href={props.link}> VIEW PROJECT <i class='fas fa-chevron-right'></i> </a>
                </button>

                
              </div>
              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i class='fas fa-times'></i>
              </button>
            </div>
          </div>
        </div>
      )}
      </div>

      
    )
}