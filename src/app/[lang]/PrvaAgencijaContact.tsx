'use client';

import { useForm } from 'react-hook-form';
import { PT_Serif } from 'next/font/google';
import toast from 'react-hot-toast';

import { useFormspark } from '@formspark/use-formspark';
const PT = PT_Serif({ subsets: ['latin'], weight: ['400'], style: ['italic'] });

interface Contact {
  formId: string;
}

const PrvaAgencijaContactSection = ({ formId }: Contact) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [submit, submitting] = useFormspark({
    formId: formId,
  });

  const onSubmit = async (data: any, event: any) => {
    event.preventDefault();

    try {
      const parseClientData = {
        ['Ime osobe']: data.name,
        ['Email adresa']: data.email,
        ['Poruka']: data.message,
      };

      await toast.promise(submit({ ...parseClientData }), {
        loading: 'Šaljemo vašu poruku...',
        success: 'Poruka je uspješno poslana!',
        error: 'Došlo je do problema. Pokušajte ponovno.',
      });

      reset();
    } catch (error) {
      console.error('Error sending the message:', error);
      toast.error('Ups! Nešto je pošlo po zlu. Pokušajte kasnije.');
    }
  };

  const onError = async (errors: any) => {
    Object.entries(errors).forEach(([field, error]) => {
      //@ts-ignore
      return toast.error(`Greška u polju ${field}: ${error.message}`);
    });
  };

  return (
    <section className={`w-full pb-20 px-4`} id='PRVA_KONTAKT'>
      <h2 className={`${PT.className} xl:text-5xl lg:text-4xl text-3xl mx-auto text-center pt-20 pb-4 `}>Kontakt</h2>

      <div className='w-full flex items-center justify-center text-[15px] gap-2 md:pb-14 pb-10'>
        <a href='mailto:info@prvaagencija.hr'>info@prvaagencija.hr</a>
        <div className='h-[15px] w-px bg-prva-tamnozelena-boja'></div>
        <a href='tel:+385991234567'>+385 99 1234 567</a>
      </div>

      <form onSubmit={handleSubmit(onSubmit, onError)} className='w-full max-w-screen-sm z-40 mx-auto'>
        <div className='w-full flex items-center justify-start gap-4'>
          <div className='mb-4 w-full group'>
            <label
              htmlFor='name'
              className='mb-2 text-sm font-medium text-prva-tamnija-boja group-focus-within:text-prva-svijetla-boja transition-all ease-out duration-200 hidden'
            >
              Vaše ime
            </label>
            <input
              type='text'
              id='name'
              className={`block p-2.5 w-full text-sm text-prva-tamna-boja bg-transparent    outline-none border-none outline-1 outline-prva-svijetla-boja active:outline-prva-tamnozelena-boja focus:outline-prva-tamnozelena-boja focus:ring-0 active:ring-0 focus:placeholder:opacity-0 transition-all ease-in-out placeholder:transition-all placeholder:ease-in-out ${
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
              className='mb-2 text-sm font-medium text-prva-tamnija-boja group-focus-within:text-prva-svijetla-boja transition-all ease-out duration-200 hidden'
            >
              Vaš email
            </label>
            <input
              type='email'
              id='email'
              className={`block p-2.5 w-full text-sm text-prva-tamna-boja bg-transparent    outline-none border-none outline-1 outline-prva-svijetla-boja active:outline-prva-tamnozelena-boja focus:outline-prva-tamnozelena-boja focus:ring-0 active:ring-0 focus:placeholder:opacity-0 transition-all ease-in-out placeholder:transition-all placeholder:ease-in-out ${
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
            className='mb-2 text-sm font-medium text-prva-tamnija-boja group-focus-within:text-prva-svijetla-boja transition-all ease-out duration-200 hidden'
          >
            Vaša poruka
          </label>
          <textarea
            id='message'
            rows={4}
            className={`block p-2.5 w-full text-sm text-prva-tamna-boja bg-transparent    outline-none border-none outline-1 outline-prva-svijetla-boja active:outline-prva-tamnozelena-boja focus:outline-prva-tamnozelena-boja focus:ring-0 active:ring-0 focus:placeholder:opacity-0 transition-all ease-in-out placeholder:transition-all placeholder:ease-in-out ${
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
            className='w-full bg-prva-tamna-boja  py-4 transition-all duration-200 ease-out cursor-pointer hover:text-almost-white  font-medium text-almost-white hover:bg-prva-blida'
          >
            Pošalji poruku
          </button>
        </div>
      </form>
    </section>
  );
};

export default PrvaAgencijaContactSection;
