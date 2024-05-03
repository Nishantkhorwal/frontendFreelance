import React,{useState,useEffect} from 'react'
import Header from '../components/Header'
import Quote from '../components/Quote'
import { useNavigate } from 'react-router-dom';

function Contact() {
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        company: '',
        message: ''
      });
      const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        initFlowbite();
    })  
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const response = await fetch('http://localhost:3000/api/contact/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            setIsLoading(false);
            console.log(formData);
            if (response.ok) {
                console.log('Form submitted successfully!');
                navigate('/');
            } else {
                const responseData = await response.text(); // Read response body as text
                console.error('Failed to submit form:', responseData || 'Empty response');
            }
        } catch (error) {
            setIsLoading(false);
            console.error('Error submitting form:', error);
        }
    };
  return (
    <>
      <div className='overflow-hidden w-full bg-slate-100 '>
      <Header heading={'Contact Us'}/>
      <div className='w-full py-20'>
      <div className='flex flex-col lg:flex-row justify-center items-center lg:px-44 rounded-lg '>
                
         <div className='lg:w-1/2 w-full shadow-lg mb-10 lg:mb-0'>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224568.36078938647!2d76.82493745405829!3d28.422858324345377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1714382016677!5m2!1sen!2sin" className='h-[580px] rounded-lg rounded-tr-none rounded-br-none w-full'  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

         </div>
         <div className='lg:w-1/2 w-full bg-blue-200 py-16 rounded-lg rounded-tl-none rounded-bl-none shadow-lg'>
            
<h1 className='font-bold text-5xl font-signika ms-3 lg:ms-[70px]  mb-8'> Contact Us</h1>
<form className="max-w-md ms-3 lg:ms-20 " onSubmit={handleSubmit}>
                <div className="relative z-0 w-full mb-5 group">
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none  bg-transparent" placeholder="Email " required />
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none  bg-transparent" placeholder="First Name" required />
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none  bg-transparent" placeholder="Last Name " required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-5 group">
                    <input type="tel"  name="phone" id="phone" value={formData.phone} onChange={handleChange} className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none  bg-transparent" placeholder=" Phone No." required />
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none  bg-transparent" placeholder=" Company" required />
                  </div>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                  <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none  bg-transparent" placeholder="Leave a comment..." required></textarea>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-32 lg:w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Submit</button>
              </form>


         </div>
         
      </div>
      </div>
      <Quote/>
      </div>
      
    </>
  )
}

export default Contact
