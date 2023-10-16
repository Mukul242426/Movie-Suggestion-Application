import React, { useState} from 'react'
import '../Styling/Register.css'
import image from '../images/image 13.png'
import validator from 'email-validator'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Register() {

const navigate=useNavigate();  

let [name,setName]=useState("");  
let [username,setUsername]=useState("");
let [email,setEmail]=useState("");
let [mobile,setMobile]=useState("");
let [msg1,setMsg1]=useState("");
let [msg2,setMsg2]=useState("");
let [msg3,setMsg3]=useState("");
let [msg4,setMsg4]=useState("");
let [msg5,setMsg5]=useState("");
let [success,setSuccess]=useState(false);

let [checked,setChecked]=useState(false);

const handleName=(event)=>{
  const correct_name=event.target.value.replace(/\s+/g,' ');
  setName(correct_name.replace(/[^a-zA-Z ]/g,''));
  setMsg1("");
}

const handleUserName=(event)=>{
  setUsername(event.target.value.replace(/[^a-zA-Z0-9_-]/g, ''));
  setMsg2("");
}

const handleEmail=(event)=>{

  setEmail(event.target.value);
  setMsg3("");
   
}

const handleMobile=(event)=>{
  setMobile(event.target.value.replace(/[^\d]/g, ''));
  setMsg4("");
}



const handleCheck=()=>{
  setChecked(!checked);
  setMsg5("");
}

const showMessage=()=>{
  toast.success('Sign Up Successfull',{
    position:toast.POSITION.TOP_LEFT,
    theme:"dark"
  });
}

const handleSignup=(event)=>{
  event.preventDefault();

  let count=0;
  
  // name
  if(name==="")
  {
    setMsg1("This field cannot be empty");
  }

  else if(name.length<3)
  {
    setMsg1("Please enter a valid name")
  }
  else
  {
    setMsg1("");
    count=count+1;
  }

  // username

  if(username==="")
  {
    setMsg2("This field cannot be empty");
  }
  else if(username.length<7)
  {
    setMsg2("Please enter a valid username");
  }
  else
  {
    setMsg2("");
    count=count+1;
  }

  // email
  if(email==="")
  {
    setMsg3("This field cannot be empty");
  }

  else if(validator.validate(email))
  {
    setMsg3("");
    count=count+1;
  }
  else
  {
    setMsg3("Please enter a valid email address");
  }

  // phone number

  if(mobile==="")
  {
    setMsg4("This field cannot be empty");
  }
  else if(mobile.length<10)
  {
    setMsg4("Please enter a valid mobile no.")
  }
  else
  {
    // console.log(mobile);
    if((/^[6-9]\d{9}$/).test(mobile))
   {
      setMsg4("")
      count=count+1;
   }
    else
    {
       setMsg4("Please enter a valid mobile no.");
    }

  }
  // checkbox

    if(checked)
    {
      count=count+1;
      setMsg5("");
    }
    else
    {
      setMsg5("Check this box if you want to proceed");
    }
    
    // signup

    if(count===5)
    {
      setName("");
      setUsername("");
      setEmail("");
      setMobile("");
      setChecked(false);
      setSuccess(true);

      let user={
        name:name,
        username:username,
        email:email,
        mobile:mobile
      }
      localStorage.setItem("userDetails",JSON.stringify(user));
      showMessage();
      navigate("/home");
      // return redirect("/home");
    }
}

  return (
    <>
    {/* <ToastContainer/> */}
    <div className='register-page'>
    <div className='left-area'>
    <img src={image} className='pic' alt="Discover"/>
    <h1 className='image-text'>Discover new things on</h1>
    <h1 className='image-text-2'>Superapp</h1>
    </div>
    <div className='right-area'>
     <form className='register-box'>
        <div className='upper-body'>
       <div className='caption'>
        Super app
       </div>
       <div className='form-row-2'>
        Create your new account
       </div>
       </div>
       <div className='lower-body'>
        <div className='form-row-3'>
        <input type="text" value={name} onChange={handleName} style={msg1==="This field cannot be empty"?{borderColor:'red'}:{borderColor:'black'}} id="name-input" placeholder='Name'/>
        <div className='error-msg'>{msg1}</div>
        </div>
        <div className='form-row-4'>
        <input type="text" value={username} onChange={handleUserName} style={msg2==="This field cannot be empty"?{borderColor:'red'}:{borderColor:'black'}} id="username-input" placeholder='Username'/>
        <div className='error-msg'>{msg2}</div>
        </div>
        <div className='form-row-5'>
        <input type="email" value={email} onChange={handleEmail} style={msg3==="This field cannot be empty"?{borderColor:'red'}:{borderColor:'black'}} id="email-input" placeholder='Email'/>
        <div className='error-msg'>{msg3}</div>
        </div>
        <div className='form-row-6'>
        <input type="text" value={mobile} maxLength={10} onChange={handleMobile} style={msg4==="This field cannot be empty"?{borderColor:'red'}:{borderColor:'black'}} id="number-input" placeholder="Mobile"/>
        <div className='error-msg'>{msg4}</div>
        </div>
        <div className='form-row-7'>
        <input type="checkbox" id="tnc" checked={checked} onChange={handleCheck}/>
        <label htmlFor="tnc" className='conditions'>Share my registration data with Superapp</label>
        <div className='error-msg'>{msg5}</div>
        </div>
        <div className='form-row-8'>
            <button onClick={handleSignup} disabled={success} className="signup">SIGN UP</button>
        </div>
        <div className='form-row-9'>
         <p>By clicking on Sign up. you agree to Superapp <span className='some-text'>Terms and Conditions of Use</span></p>
        </div>
        <div className='form-row-10'>
        <p>To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp
            <span className='some-text'> Privacy Policy</span></p>
        </div>

       </div>
     </form>
    </div>
    </div>
    </>
    
  )
}

export default Register;
