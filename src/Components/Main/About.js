import React ,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import img1 from './Images/AboutPage1.jpg'
import jaykarn from './Images/jaykarn.jpg'
import "./About.css"
import { SocialIcon } from 'react-social-icons';
import Button from 'react-bootstrap/Button';
// const PDF_FILE_URL="./Images/jaiResumNewCV.pdf"
export const About = (props) => {

  const onButtonClick=()=>{
   fetch('jaiResumNewCV.pdf').then(response=>{
    response.blob().then(blob=>{
      const fileURL=window.URL.createObjectURL(blob);
      let alink=document.createElement('a')
      alink.href=fileURL;
      alink.download='jaiResumNewCV.pdf';
      alink.click();
    })
   })
}

  const [inputarr,setInputarr]=useState([])
  const [inputdata,setInputdata]=useState({
name:"",
comment:""
  })

  function changehandle(e){
    setInputdata({...inputdata,[e.target.name]:e.target.value})
  }
let {name,comment}=inputdata;
  function changhandle(){
setInputarr([...inputarr,{name,comment}])
setInputdata({name:"",comment:""})
  }
  return (
    <>

        <Card className="bg-dark text-dark " id="aboutcard">
      <Card.Img src={img1} Style="height:400px" alt="Card image" />
      <Card.Body className="aboutcardbody">
        <Card.Title className="title">We The Web Developer</Card.Title>
        <Card.Text className="txt">
        <img src={jaykarn} alt="...jaykarn" Style="height:150px; width:150px;"/>
         
 <p>This is me Jaykarn Singh.</p>
  <p>
   {props.data} website is all about creativity and innovative work in the field of Technology.
   We provide web development courses videos, MCS important videos and technology videos and articles. 
   You will get all of my youtube videos source code and you are free to use it and make changes.
   
   Please give us your valuable feedback and suggestions. We appreciate your opinions and will use it to evaluate changes and make improvements on our blog.
     </p>
     <p>
     
My name is Jaykarn Singh Rawat. I'm 24years old. I born in Pauri Garhwal, Uttarakhand, India. Currently, I am living in Dehradun, India. In my family, I live with my papa, mummy and one elder sister, her name is Kavita Rawat. I am thankful to God that he gives me such a wonderful family.
I am working as a web developer. I want to share with you my experiences during Colleges, as Web developers and the problems I faced, the solutions I found and the places I went to.
     </p>
        </Card.Text>
        <Button variant="danger" onClick={onButtonClick}>Download CV</Button>
      </Card.Body>
    </Card>

    <div className="container mt-20">



    <div className="section">
    <h2>Comment</h2>

    <div className="comments">
      <input type="text" name="name" value={inputdata.name} onChange={changehandle} placeholder="Name"/><br/>
      <textarea name="comment" value={inputdata.comment} onChange={changehandle} placeholder="Enter Your Comment"/><br/>
      <Button variant="primary" onClick={changhandle}>Submit</Button>
    </div>

{
  inputarr.map((info)=>{
return(
  <Card border="primary" style={{ width: '60%' }}>
        <Card.Body>
          <Card.Title className="cmtsname">{info.name}</Card.Title>
          <Card.Text className="cmts">
          {info.comment}
          </Card.Text>
        </Card.Body>
      </Card>
)
  })
}  
    </div>
   
       

    <div className="section" id="iconSection">
        <SocialIcon className="icon" url="https://github.com/JaykarnSingh" />
        <SocialIcon  className="icon" url="https://www.linkedin.com/in/jaykarnsingh29499/" />
        <SocialIcon className="icon" url="https://web.telegram.org/z/" />
        <SocialIcon className="icon" url="https://call.whatsapp.com/video/ISrBaHBfJD7KeQn8ugYJst" />
        <hr className="line"/>
        <hr className="line1"/>
        <hr className="line2"/>
        <hr className="line3"/>
        <hr className="line4"/>
        <hr className="line5"/>
        <hr className="line6"/>
    </div>
    

    </div>
    </>
  )
}
