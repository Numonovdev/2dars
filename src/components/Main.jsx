import location from '../img/ic.png'
import phone from '../img/phone.png'

function Main(){
     return(
          <div className="bg-blue-300 rounded-[80px] mt-10 w-full gap-20 py-52   flex items-center max-w-[1440px] justify-center mx-auto">
               <div className="w-[547px] h-[576px] justify-between flex flex-col">
                    <p className="font-bold text-lg text-[#676767]">A SECURITY SOLUTION</p>
                    <h1
                    className="text-5xl font-black Nunito "
                    >
                    Keep track of your loved ones in real time!
                    </h1>
                    <div className="w-[547px] h-1 bg-[#D6D6D6]"></div>
                    <div className='flex gap-10'>
                         <img src={location} className='w-[50px] h-[77px]' alt="" />
                         <p className='w-[460px] text-xl font-medium Poppins'>We noticed the high level of insecurity in the world, and we thought of how technology could be used to combat these insecurities.</p>
                    </div>
                    <h1 className='Nunito font-extrabold text-[40px] '>Join Our Waitlist!</h1>
                    <p className='Poppins font-medium text-xl '>Be the first to get notified when the product is ready!</p>
                    
                    <div className='w-[527px] rounded-[38px] h-[77px] bg-white flex items-center px-5 justify-between'>
                         <input className=' text-xl font-medium Nunito outline-transparent ' type="text" placeholder='Your email address'/>
                         <button className='w-[153px] h-[62px] rounded-[32px] text-white bg-blue-700'>JOIN LIST!</button>
                    </div>
               </div>
                    <img className='w-[452px]' src={phone} alt="" />


          </div>
     )
}

export default Main