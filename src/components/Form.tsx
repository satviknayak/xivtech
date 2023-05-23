import { Dispatch, SetStateAction,Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react'

interface FormProps {
  formOpen: boolean;
  setFormOpen: Dispatch<SetStateAction<boolean>>;
}

function Form(props:FormProps) {
    return(
        <Transition appear show={props.formOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={()=>props.setFormOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[800px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h1" className="text-2xl font-medium leading-6 text-gray-900">Contact Us</Dialog.Title>
                  
                  <form className='flex flex-col gap-y-8 my-8'>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                        <div className='flex flex-col w-full gap-y-2'>
                            <span>First Name *</span>
                            <input required type="text" className='w-full h-10 px-2 border-[1px] rounded-lg border-gray-600/40 focus:border-none focus-visible:ring-2  focus-visible:ring-blue-400 focus-visible:shadow-sm focus-visible:ring-offset-2 focus-visible:shadow-blue-500' />
                        </div>
                        <div className='flex flex-col w-full gap-y-2'>
                            <span>Last Name *</span>
                            <input required type="text" className='w-full h-10 px-2 border-[1px] rounded-lg border-gray-600/40 focus:border-none focus-visible:ring-2  focus-visible:ring-blue-400 focus-visible:shadow-sm focus-visible:ring-offset-2 focus-visible:shadow-blue-500' />
                        </div>
                        <div className='flex flex-col w-full gap-y-2'>
                            <span>Work Email *</span>
                            <input required type="text" className='w-full h-10 px-2 border-[1px] rounded-lg border-gray-600/40 focus:border-none focus-visible:ring-2  focus-visible:ring-blue-400 focus-visible:shadow-sm focus-visible:ring-offset-2 focus-visible:shadow-blue-500' />
                        </div>
                        <div className='flex flex-col w-full gap-y-2'>
                            <span>Business Phone *</span>
                            <input required type="text" className='w-full h-10 px-2 border-[1px] rounded-lg border-gray-600/40 focus:border-none focus-visible:ring-2  focus-visible:ring-blue-400 focus-visible:shadow-sm focus-visible:ring-offset-2 focus-visible:shadow-blue-500' />
                        </div>
                        <div className='flex flex-col w-full gap-y-2'>
                            <span>Organisation *</span>
                            <input required type="text" className='w-full h-10 px-2 border-[1px] rounded-lg border-gray-600/40 focus:border-none focus-visible:ring-2  focus-visible:ring-blue-400 focus-visible:shadow-sm focus-visible:ring-offset-2 focus-visible:shadow-blue-500' />
                        </div>
                        <div className='flex flex-col w-full gap-y-2'>
                            <span>Job Role *</span>
                            <input required type="text" className='w-full h-10 px-2 border-[1px] rounded-lg border-gray-600/40 focus:border-none focus-visible:ring-2  focus-visible:ring-blue-400 focus-visible:shadow-sm focus-visible:ring-offset-2 focus-visible:shadow-blue-500' />
                        </div>
                    </div>
                    <div className='flex flex-col w-full gap-y-2'>
                        <span>Country *</span>
                        <select required className='w-full h-10 px-2 border-[1px] rounded-lg border-gray-600/40 focus:border-none focus-visible:ring-2  focus-visible:ring-blue-400 focus-visible:shadow-sm focus-visible:ring-offset-2 focus-visible:shadow-blue-500' >
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>
                    <div className='flex flex-col w-full gap-y-2'>
                        <span>Your Message</span>
                        <textarea className='w-full h-24 p-2 border-[1px] rounded-lg border-gray-600/40 focus:border-none focus-visible:ring-2  focus-visible:ring-blue-400 focus-visible:shadow-sm focus-visible:ring-offset-2 focus-visible:shadow-blue-500' />
                    </div>

                  </form>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-md font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                      onClick={()=>props.setFormOpen(false)}
                    >
                      Submit
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    )
}

export default Form