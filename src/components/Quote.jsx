import React,{useState,useEffect} from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

function Quote() {
  const [quoteFormData, setQuoteFormData] = useState({
    email2: null,
    first_name: null,
    last_name: null,
    message2: null
  });
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
useEffect(() => {
    initFlowbite();
})  
const [formErrors, setFormErrors] = useState({});
const [submissionMessage, setSubmissionMessage] = useState('');

const handleChange = (e) => {
    const { name, value } = e.target;
    setQuoteFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};

    // Validation logic
    if (!quoteFormData.first_name) {
      errors.first_name = 'First Name is required';
    }
    if (!quoteFormData.last_name) {
      errors.last_name = 'Last Name is required';
    }
    if (!quoteFormData.email2) {
      errors.email2 = 'Email is required';
    }
    if (!quoteFormData.message2) {
      errors.message2 = 'Message is required';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return; // Prevent form submission
    }
    try {
        setIsLoading(true);
        const response = await fetch('https://backendfreelance-4.onrender.com/api/quote/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(quoteFormData)
        });
        setIsLoading(false);
        console.log(quoteFormData);
        if (response.ok) {
            console.log('Form submitted successfully!');
            setSubmissionMessage('Form submitted successfully!');
            // Clear form fields after 2 seconds
            setTimeout(() => {
              setSubmissionMessage('');
              setQuoteFormData({
                email2: '',
                first_name: '',
                last_name: '',
                message2: ''
              });
            }, 2000);
            navigate('/');
        } else {
            const responseData = await response.text(); // Read response body as text
            setSubmissionMessage('Failed to submit form. Please try again.');
            console.error('Failed to submit form:', responseData || 'Empty response');
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        setIsLoading(false);
    }
};
  return (
    <>
      <div className='lg:w-screen w-full bg-slate-200 py-32 duration-75 transition-all ease-in' >
      <div className='flex lg:flex-row flex-col justify-center items-center'>
        <div className='lg:w-[50%] w-full flex justify-center me-4 lg:me-0'>
        <div className='py-10 px-14 bg-white rounded-lg lg:w-[70%] w-[90%] mb-6 lg:mb-0' data-aos="fade-right">
        <form className='flex flex-col  shadow-sm ' onSubmit={handleSubmit}>
          <div className='flex mb-5'> <input type="text" id="first_name" name="first_name" value={quoteFormData.first_name || ''} onChange={handleChange} className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 me-4" placeholder="FirstName" required  /> 
          
          <input type="text" id="last_name" name="last_name" value={quoteFormData.last_name || ''} onChange={handleChange} className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name" required /> 
          </div>

          <input type="email" id="email2" name="email2" value={quoteFormData.email2 || ''} onChange={handleChange} className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-6" placeholder="Email" required />
                  <textarea id="message2" name="message2" rows="4" value={quoteFormData.message2 || ''} onChange={handleChange} className="block px-8 py-3 w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none mb-5" placeholder="Write your thoughts here..." required></textarea>
          
          <button type="submit" className="text-white   font-medium  text-sm  px-7 py-4 text-center me-2 mb-2 bg-gradient-to-l  from-blue-700 to-green-400 rounded-md ">{isLoading ? 'Loading...' : 'Contact Us'}</button>
          {submissionMessage && (
                  <div className="text-sm text-gray-700 mt-2">{submissionMessage}</div>
                )}



        </form>
        </div>
        </div>
        <div className='flex flex-col  lg:w-[50%] w-[90%] justify-center' data-aos="fade-left">
          <h3 className='text-5xl font-bold mb-4 font-signika bg-gradient-to-l  from-blue-700 to-green-400 text-transparent bg-clip-text inline-block'>Request A Free Quote</h3>
          <h1 className='font-bold text-5xl mb-6 font-signika'>Make Brand As<br/> Brilliant One</h1>
          <p className='text-lg lg:pe-44 mb-8 font-signika'>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
          <div className='flex justify-start items-center font-signika'><div className=' hover:bg-cyan-600 cursor-pointer px-3 py-3 rounded-full text-black bg-white me-6'><BsFillTelephoneFill className=''/></div> <h1 className='text-xl font-semibold'>Helpline:<br/>000 123 456 789</h1></div>


        </div>

      </div>

    </div>
    </>
  )
}

export default Quote
