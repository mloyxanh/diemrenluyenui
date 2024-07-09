import React from 'react'

const SinhVien = () => {
  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
        <div className='px-8 py-8'>
            <div className='font-thin text-2xl'>
                <h1>Thong tin Sinh Vien</h1>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>
                    First Name
                </label>
                <input type='text' className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>
                    Last Name
                </label>
                <input type='text' className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>
                    Address
                </label>
                <input type='text' className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>
                    Phone Number
                </label>
                <input type='number' className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <button className='rounded text-white font-semibold bg-green-400 py-2'>
                  Save  
                </button> 
            </div>
        </div>
    </div>
  )
}

export default SinhVien