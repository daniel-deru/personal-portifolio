import React from 'react'
import "../css/Contact.css"
import { MdPhoneIphone} from "react-icons/md"
import { AiOutlineMail } from "react-icons/ai"

const Contact = () => {

    const styles = {
        fontSize: "1em",
        margin: " 0 10px"
       
    }

    const getNumber = () => {
       const number = document.createElement("span")
       number.textContent = "+27847122240"
       document.body.appendChild(number)
       number.select()
       document.execCommand("copy")
        document.body.removeChild(number)
   
    }

   const labels = document.getElementsByTagName("label")
    const arr = Array.from(labels)
    arr.forEach(label => {
        label.addEventListener("click", () => {
            label.classList.toggle("move")
        })
    })
    
    return (
        <div id="contact-container">
            <form action="mailto:danielderu3@gmail.com" method="POST">
                <div>
                    {/* <label >name/company</label> */}
                    <input type="text" placeholder="name / company" name="name"/>
                </div>
                <div>
                    {/* <label htmlFor="email" className="normal">email</label> */}
                    <input type="text" placeholder="email" name="email"/>
                </div>
                <div>
                    {/* <label htmlFor="message" className="normal">message</label> */}
                    <textarea name="message" id="" cols="30" rows="5" placeholder="message"></textarea>
                </div>
               
               <div className="button-icons">
                    <button type="submit">send</button>
                    <div>
                        {/* <a href="tel:+27847122240"><MdPhoneIphone style={styles} className="contact-icon"/></a> */}
                        <MdPhoneIphone style={styles} className="contact-icon" onClick={getNumber}/>
                        <a href="mailto:danielderu3@gmail.com"><AiOutlineMail style={styles} className="contact-icon"/></a>
                    </div>
                   
               </div>
               
            </form>
            
        </div>
    )
}

export default Contact
