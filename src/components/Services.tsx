import { motion } from "framer-motion";

type ServiceProp = {
    title : string,
    image : string,
    paragraph : string,
    url : string,
    link : string,
}

function Services(props:ServiceProp) {
    return(
        <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay:0.5,duration:1, repeat:0 }}
        className='px-[5%] tab:px-[18%] py-[3%]'>
            
            <div className='flex md:hidden flex-col w-full gap-y-6 mb-8'>
                <h1 className='text-4xl'>{props.title}</h1>
                <div className='flex h-72 w-full'><img className='object-cover object-center w-full h-full' src={props.image} alt={props.title} /></div>
                <p className='text-sm' >{props.paragraph}</p>
                <a className='text-lg' href={props.url}>{props.link}<span></span> </a>
            </div>

            <div className='hidden md:grid grid-cols-2 flex-col w-full items-center'>
                <div className='pr-12'>
                    <h1 className='text-4xl lg:text-5xl my-8'>{props.title}</h1>
                    <p className='text-lg mb-20' >{props.paragraph}</p>
                    <a className='text-2xl' href={props.url}>{props.link}<span></span> </a>
                </div>
                <div className='flex h-full w-full'><img className='object-cover object-center w-full h-full' src={props.image} alt={props.title} /></div>
            </div>
        
        </motion.div>
    )
}

export default Services