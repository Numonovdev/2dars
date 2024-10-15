import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
function Navbar() {
  const [trufals, setTruFals]=useState(false)
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("");
  const [tilValue, setTilValue]= useState("")
  const tunkunRef = useRef();
  const navbarRef = useRef();
  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (value) {
      navigate(`/${value}`);
    }
  };


  function handleTun(){
     if(!trufals){
          tunkunRef.current.style.justifyContent = "end";
          setTruFals(true)
     }
     if(trufals){
          tunkunRef.current.style.justifyContent = "start";
     }
     if(trufals){
          setTruFals(false)
     } else{
          setTruFals(true)

     }
  }

  function handleTil(event){
       const value = event.target.value
     setTilValue(value)
     if(value){
          if(value === "uzb"){
               toast("o`zbek tiliga o`tdi")
          }
          if(value === "rus"){
               toast("перешел на русский")
          }
          if(value === "eng"){
               toast("switched to English")
          }
     }
}

  function handleLogo (event) {
     navigate("/");
  };

  function handleLogin (event) {
     event.preventDefault()
     navigate("/login");
  };

  function handleSignUp(event) {
     event.preventDefault()
     navigate("/signup");
  };

  return (
    <div ref={navbarRef} className="w-full flex items-center justify-between max-w-7xl mx-auto h-[101px]">
       <div onClick={handleLogo}>
      <h1 className="Roboto text-3xl cursor-pointer">YOUR LOGO</h1>
       </div>
      <div className="flex text-xl cursor-pointer justify-between gap-2">
        <Link to="/" className="px-2 py-1 hover:bg-gray-400 rounded-md hover:text-white">
          Home
        </Link>
        <select className="cursor-pointer" value={selectedValue} onChange={handleSelectChange}>
          <option value="">Assets</option>
          <option value="creators">creators</option>
          <option value="careers">careers</option>
          <option value="gopro">gopro</option>
        </select>
        <Link to="/creators" className="px-2 py-1 hover:bg-gray-400 rounded-md hover:text-white">
          Creators
        </Link>
        <Link to="/careers" className="px-2 py-1 hover:bg-gray-400 rounded-md hover:text-white">
          Careers
        </Link>
        <Link to="/gopro" className="px-2 py-1 hover:bg-gray-400 rounded-md hover:text-white">
          Go Pro
        </Link>
      </div>



      <div className="cursor-pointer text-xl flex gap-1 items-center">
          <dir className="w-20 bg-gray-300 py-1 h-10 rounded-[20px] items-center flex justify-start px-1" onClick={handleTun} ref={tunkunRef}>
               <div className='w-8 rounded-[15px] h-full bg-black '></div>
          </dir>
          
        <select className="cursor-pointer" value={tilValue} onChange={handleTil}>
          <option value="uzb">UZB</option>
          <option value="rus">RUS</option>
          <option value="eng">ENG</option>
        </select>
        <ToastContainer />
        <button
          className="font-black hover:text-white rounded-[100px] w-[119px] h-[45px] hover:bg-blue-500"
          onClick={handleLogin}
        >
          Log in
        </button>
        <button
          className="font-black w-[119px] h-[45px] hover:bg-blue-500 bg-[#0B56E8] text-white rounded-[100px]"
          onClick={handleSignUp}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
