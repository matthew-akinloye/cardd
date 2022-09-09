import { FaEnvelope, FaLinkedin} from 'react-icons/fa'

function Hero() {
 

  return (
    <div className="Hero">
    <h1>Laura Smith</h1>
      <h3>Frontend Developer</h3>
      <h5>laurasmith.website</h5>
      <button className="mlbtn" ><FaEnvelope /> &nbsp;
        Email &nbsp; &nbsp;</button>&nbsp; &nbsp; &nbsp; &nbsp;
        <button className="lkbtn" ><FaLinkedin />&nbsp; 
        LinkedIn</button> 
        <br/> <br/> <br/> 
        
     
     <div className="lrm">
      <h2>About</h2>
      <p>I am a frontend developer with a particular interest 
        in making things simple and automating daily tasks.
        I try to keep up with security and best practices,
        and i'm always looking for new things to learn.
      </p>
      <br/> 
      
      <h2>Interests</h2>
      <p>Food expert. Music scholar. Reader. Internet fanatic.
        Bacon buff. Entrepreneur. Travel geek. Pop culture ninja.
        coffee fanatic.
      </p>
      <br/> 
      <br/> 
     </div>
    </div>
  )
}

export default Hero