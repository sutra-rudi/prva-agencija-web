'use client';

import { useForm } from 'react-hook-form';
import { PT_Serif } from 'next/font/google';
import toast from 'react-hot-toast';

import { useFormspark } from '@formspark/use-formspark';
const PT = PT_Serif({ subsets: ['latin'], weight: ['400'], style: ['italic'] });

const PrvaAgencijaContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [submit, submitting] = useFormspark({
    formId: '9DolWOCtL',
  });

  const onSubmit = async (data: any, event: any) => {
    event.preventDefault();
    try {
      await submit({ ...data });
      reset();
      toast.success(`Hvala na svemu!, ${JSON.stringify(data)}`);
    } catch (error) {
      console.error('Error sending the message:', error);
      toast.error('Došlo je do pogreške prilikom slanja poruke.');
    }
  };

  const onError = async (errors: any) => {
    Object.entries(errors).forEach(([field, error]) => {
      //@ts-ignore
      return toast.error(`Greška u polju ${field}: ${error.message}`);
    });
  };

  return (
    <section className={`w-full pb-20`}>
      <h2 className={`${PT.className} text-5xl mx-auto text-center pt-20 pb-9 `}>Kontakt</h2>

      <form onSubmit={handleSubmit(onSubmit, onError)} className='w-full max-w-screen-sm z-40 mx-auto'>
        <div className='w-full flex items-center justify-start gap-4'>
          <div className='mb-4 w-full group'>
            <label
              htmlFor='name'
              className='block mb-2 text-sm font-medium text-prva-tamnija-boja group-focus-within:text-prva-svijetla-boja transition-all ease-out duration-200'
            >
              Vaše ime
            </label>
            <input
              type='text'
              id='name'
              className={`block p-2.5 w-full text-sm text-prva-tamna-boja bg-transparent  rounded-sutraContactFormButton  outline-none border-none outline-1 outline-prva-tamna-boja active:outline-prva-svijetla-boja focus:outline-prva-svijetla-boja focus:ring-0 active:ring-0 focus:placeholder:opacity-0 transition-all ease-in-out placeholder:transition-all placeholder:ease-in-out ${
                errors.name && 'border-red-500'
              }`}
              placeholder='Ivan Horvat'
              {...register('name', {
                required: 'Ime je obavezno',
              })}
            />
            {/* @ts-ignore */}
            {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
          </div>

          <div className='mb-4 w-full group'>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-prva-tamnija-boja group-focus-within:text-prva-svijetla-boja transition-all ease-out duration-200'
            >
              Vaš email
            </label>
            <input
              type='email'
              id='email'
              className={`block p-2.5 w-full text-sm text-prva-tamna-boja bg-transparent  rounded-sutraContactFormButton  outline-none border-none outline-1 outline-prva-tamna-boja active:outline-prva-svijetla-boja focus:outline-prva-svijetla-boja focus:ring-0 active:ring-0 focus:placeholder:opacity-0 transition-all ease-in-out placeholder:transition-all placeholder:ease-in-out ${
                errors.name && 'border-red-500'
              }`}
              placeholder='vašeime@mail.com'
              {...register('email', {
                required: 'Email je obavezan',
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                  message: 'Unesite ispravan email',
                },
              })}
            />
            {/* @ts-ignore */}
            {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
          </div>
        </div>

        <div className='mb-4 group'>
          <label
            htmlFor='message'
            className='block mb-2 text-sm font-medium text-prva-tamnija-boja group-focus-within:text-prva-svijetla-boja transition-all ease-out duration-200'
          >
            Vaša poruka
          </label>
          <textarea
            id='message'
            rows={4}
            className={`block p-2.5 w-full text-sm text-prva-tamna-boja bg-transparent  rounded-sutraContactFormButton  outline-none border-none outline-1 outline-prva-tamna-boja active:outline-prva-svijetla-boja focus:outline-prva-svijetla-boja focus:ring-0 active:ring-0 focus:placeholder:opacity-0 transition-all ease-in-out placeholder:transition-all placeholder:ease-in-out ${
              errors.name && 'border-red-500'
            }`}
            placeholder='Napišite nam poruku'
            {...register('message', {
              required: 'Poruka je obavezna',
            })}
          />
          {/* @ts-ignore */}
          {errors.message && <span className='text-red-500'>{errors.message.message}</span>}
        </div>
        <div className='w-full flex items-center justify-center'>
          <button
            type='submit'
            className='lg:w-1/2 mx-auto w-full bg-prva-tamna-boja  py-4 transition-all duration-200 ease-out cursor-pointer hover:bg-prva-tamnozelena-boja hover:text-almost-white hover:scale-90 font-medium text-almost-white'
          >
            Pošalji poruku
          </button>
        </div>
      </form>
    </section>
  );
};

export default PrvaAgencijaContactSection;
