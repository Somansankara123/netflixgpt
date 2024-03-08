import { useRef, useState } from "react";
import Header from "./Header";
import {BG_URL,AVATAR_URL} from "../utils/constant"
import {validateData} from "../utils/validation"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import  {auth} from "../utils/firebase"
import { addUser } from "../utils/userSlice";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
const Login=()=>{
    const[signForm,setSignForm]=useState(true)
    const[errorMessage,setErrorMessage]=useState(null)
    const name=useRef(null)
    const email=useRef(null)
    const Password=useRef(null)
    const dispatch=useDispatch()
    function toogleform(){
        setSignForm(!signForm)
    }
    function handleValidation(){
        const message=validateData(email.current.value,Password.current.value)
        setErrorMessage(message)
        if(message) return
       if(!signForm){

        createUserWithEmailAndPassword(auth, email.current.value, Password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value,
      photoURL: AVATAR_URL,
    })
      .then(() => {
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
    // ..
  });
       }
       else{
        signInWithEmailAndPassword(auth, email.current.value, Password.current.value)
  .then((userCredential) => {
    // Signed in 
   
    // ...
    const user = userCredential.user;
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
  });


       }
    }
    return(
        <div   
        ><Header/>
            <div className=" absolute">
            <img  className=" z-10  w-screen  h-screen object-cover "  src={BG_URL} alt="logo"/>
            </div>
            <form className="  absolute z-20    w-full md:w-3/12 a  p-12  bg-black my-36 mx-auto right-0 left-0  text-white bg-opacity-80"   onSubmit={(e)=>e.preventDefault()}>
                <h2 className="text-3xl py-4  font-bold">{(signForm)?  "Sign In" :"Sign Up"}</h2>
                {!signForm &&
                 <input ref={name} className="p-4 my-4 w-full rounded-lg bg-gray-600"  type="text"  placeholder="FirstName" />
                }
                <input ref={email} type="email"  placeholder="email" className="p-4 my-4 w-full rounded-lg bg-gray-600" />
                <input ref={Password} type="Password"  placeholder="Password" className="p-4 my-4 w-full rounded-lg bg-gray-600" />
                <p className="text-red-800 p-2 text-lg  font-bold">{errorMessage}</p>
 
                <button  className="p-4 my-4 w-full bg-red-700 rounded-lg"    onClick={handleValidation}>{signForm ? "Sign In" :"Sign Up"}</button>
                <p  className="cursor-pointer "   onClick={toogleform}>
                    {(signForm)? "New to Netflix? please Sign up":"Already an user please sign in"}
                </p>

            </form>
          
        
        </div>
    )
}
export default Login;