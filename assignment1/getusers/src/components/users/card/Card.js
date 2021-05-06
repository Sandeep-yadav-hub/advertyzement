import React,{useRef,useEffect,useState} from 'react'
// import {CardContainer} from "./styled"
import profileImgDefault from "../../../images/profileImg.jpg";


function Card({firstName,lastName,profile,email}) {
    const avatar = useRef()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      avatar.current.addEventListener("load", () => {
        setLoading(false)
        avatar.current.style.display = "";

      });
    }, []);
    
    return (
      <div>
        <img style={{display:"none"}}  ref={avatar}   src={profile} alt="user profile" />
        <img style={{display:loading?"":"none"}}   src={profileImgDefault} alt="user profile" />
        <h2>
          {firstName} {lastName}
        </h2>
        <p>{email}</p>
      </div>
    );
}

export default Card
