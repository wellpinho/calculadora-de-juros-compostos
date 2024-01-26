'use client'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { Resume } from './resume';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Inputs = {
  initialValue: number
  valueMonth: number
  currency: string
  period: string
  time: number
  fee: string
}

export default function Home() {
  const [resume, setResume] = useState(false);
  const [initiValue, setInitValue] = useState(0);
  const [earned, setEarned] = useState(0);
  const [total, setTotal] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
  const fee = Number(data.fee) / 100;
  const total = data.initialValue * (1 + fee) ** data.time;
  const totalGain = total - data.initialValue;

    const response = {
      totalInvested: data.initialValue,
      totalAnnualInterestEarned: totalGain,
      total
    }

    setInitValue(response.totalInvested);
    setEarned(response.totalAnnualInterestEarned);
    setTotal(response.total);

    setResume(!resume);
    return response;
  }

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 h-screen">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">
          Juros compostos
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Calculadora de juros compostos gratuita, você fica por dentro do valor que poderá receber com juros ao fazer um investimento com aporte mensal por um determinado período e com uma taxa definida.
        </p>
      </div>

      <form className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
              Valor inicial
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="R$ 0,00"
                {...register('initialValue')}
              />
            </div>
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
              Valor mensal
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="R$ 0,00"
                {...register('valueMonth')}
              />
            </div>
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
              Taxa de juros
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="0.00"
                {...register('fee')}
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <label htmlFor="currency" className="sr-only">
                  Mensal
                </label>
                <select
                  className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  {...register('currency')}
                >
                  <option>Mensal</option>
                  <option>Anual</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
              Período em
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="0"
                {...register('time')}
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <select
                  className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  {...register('period')}
                >
                  <option>Meses</option>
                  <option>Anos</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Calcular
          </button>
        </div>

      </form>
        {resume && <Resume total={total} totalAnnualInterestEarned={earned} totalInvested={initiValue} />}
    </div>
  );
}
