import type { NextPage } from "next";

import { IconLink } from "../components/IconLink";
import { useForm, ValidationError } from '@formspree/react'; 

const Contact: NextPage = () => {
  const [state, handleSubmit] = useForm("xbjeezyj");
  return (
    <>

      <div className="container mx-auto max-w-md px-2">
        <h1 className="text-4xl text-purple-300">Contact me</h1>
        <form onSubmit={handleSubmit} className='p-4 grid text-slate-200 mt-2'>
            <div>
              <input className='bg-slate-600/40 my-2 rounded-md h-12 w-full border-2 px-4'
              id="name"
              type="text" 
              name="name"
              placeholder='Name'
            /></div>
            <div>
              <input className='bg-slate-600/40 my-2 rounded-md h-12 w-full border-2 px-4'
              id="email"
              type="email" 
              name="email"
              placeholder='Email'
            /></div>
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
            <div>
              <textarea className='bg-slate-600/40 my-2 rounded-md h-32 w-full border-2 px-4 pt-2'
              id="message"
              name="message"
              placeholder='Message'
            /></div>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
            <button className='bg-gradient-to-t from-indigo-700 to-blue-500 rounded-md text-lg font-semibold active:bg-violet-900 active:scale-[0.95] transition-all duration-100 h-12' type="submit" disabled={state.submitting}>Submit</button>
          </form>
          <div className="flex flex-row justify-center mt-4 px-2 md:px-0">
          <IconLink
            icon="linkedin"
            url="https://www.linkedin.com/in/pradeep-rao-k-0b7b81204/"
          />
          <IconLink
            icon="twitter"
            url="https://twitter.com/PradeepRaoK1"
          />
          <IconLink
            icon="github"
            url="https://github.com/PradeepRaoK"
          />
        </div>
      </div>
      <div className="mt-6 text-center text-1xl text-white">Developed with ❤️ by <a href="https://github.com/PradeepRaoK" className='bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-400 text-transparent'>Pradeep Rao K</a></div>
    </>
  );
};

export default Contact;