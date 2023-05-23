import { useState } from "react"

import Services from "./components/Services"
import Form from "./components/Form"


const ServicesContent = [
  {
    title:'AI + RPA is what we do',
    image:'rp2.jpg',
    paragraph:'Future-Proof your business. Drive efficiency, profitability and deliver on customer experience',
    url:'https://www.xivtech.io./services/AIandRPAautomation', 
    link:'AI + RPA Automation'
  },
  {
    title:'Make Bolder Choices',
    image:'p1.png',
    paragraph:'Digital focused strategies to realize market-changing ideas',
    url:'https://www.xivtech.io./services/enterprise-apps', 
    link:'Build Better Apps'
  },
  {
    title:'Innovate with Speed',
    image:'p2.jpg',
    paragraph:'Create higher quality software, deliver on customer expectations and business goals',
    url:'https://www.xivtech.io./services/delivery-pipeline-automation', 
    link:'DevOps'
  },
  {
    title:'Embrace Cloud',
    image:'p3.jpg',
    paragraph:'With Cloud-First accelerate innovation and optimize performance',
    url:'https://www.xivtech.io./services/cloud', 
    link:'Cloud Services'
  }
]


function App() {

  const [formOpen,setFormOpen] = useState(false)

  return (
    <div className='relative'>
      <div className='absolute top-44 xsm:top-32 left-1/2 -translate-x-1/2 flex w-[90%] h-96 xsm:w-full xsm:h-[450px] tab:w-[65%]'>
        <img className='object-cover object-center w-full h-full' src="/header.jpg" alt="" />
      </div>
      <div className='flex w-full h-96 bg-gray-900'></div>

      <h1 className='mt-48 px-[5%] tab:px-[18%] py-[3%] text-lg xsm:text-2xl font-bold'>Let's Collaborate</h1>

      {ServicesContent?.map((service,index)=>(
        <Services key={index} title={service.title} image={service.image} paragraph={service.paragraph} url={service.url} link={service.link} />
      ))}

      <button onClick={()=>setFormOpen(true)} className='text-md hover:text-white border-black text-black border-2 px-10 py-5 mx-[5%] mb-24 tab:mx-[18%] rounded-sm button'>
        Get in touch
      </button>

      <Form formOpen={formOpen} setFormOpen={setFormOpen} />

      <div className='flex w-full h-60 bg-black'></div>
    </div>
  )
}
export default App
