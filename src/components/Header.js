import React from 'react'
import { AVATAR_URL, LOGO, SUPPORTED_LANGUAGES } from '../utils/constant'
import { onAuthStateChanged,signOut } from 'firebase/auth'
import {auth} from "../utils/firebase"
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser,removeUser } from '../utils/userSlice'
import { useEffect } from 'react'
import { toogleGptSearchView } from '../utils/GptSlice'
import { changeLanguage } from '../utils/configSlice'

const Header = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const user=useSelector((store)=>store.user)
  const gpt=useSelector((store)=>store.GPT.showGptSearch)
  const handleSignOut=()=>{
      signOut(auth)
    .then(() => {})
    .catch((error) => {
      navigate("/error");
    });
};
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid, email, displayName, photoURL } = user;
      dispatch(
        addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        })
      );
      navigate("/browse");
    } else {
      dispatch(removeUser());
      navigate("/");
    }
  });
  // Unsubscribe when component unmounts
  return () => unsubscribe();
}, []);

 function handleGpt(){
  dispatch(toogleGptSearchView())


 }
 function handleLanguageChange(e){
  dispatch(changeLanguage(e.target.value))
 }
  return (
    <div className=' absolute px-8 py-2 bg-gradient-to-black z-10 w-screen flex  flex-col   md:flex-row    justify-between' >
        <img src={LOGO}   className=" w-44 mx-auto md:mx-0"   alt='header'></img>
{user &&(
        <div className='flex p-2 justify-between'>
          {gpt && <select
          className='p-2 m-2 bg-gray-900 text-white '
          onChange={handleLanguageChange}
          
          >
            {SUPPORTED_LANGUAGES.map((lang)=>(
              <option key={lang.identifier}  value={lang.identifier}>
                {lang.name}

              </option>
            ))}
            </select>}
          <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg' onClick={handleGpt} >{gpt?"HomePage":"GPT search"}</button>
        <img
                className="
                hidden md:bl'
                w-12 h-12"
                alt="usericon"
                src={user?.photoURL}
                />
                  <button onClick={handleSignOut} className="font-bold text-white ">
            (Sign Out)
          </button>
        </div>)}
    </div>
  )
}

export default Header