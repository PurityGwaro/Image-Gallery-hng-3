import React from 'react'

function Loader() {
  return (
    <div className='grid items-center justify-center place-content-center'>
      <div className='w-40 h-40 mt-20 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin'>
      </div>
    </div>
  )
}

export default Loader
