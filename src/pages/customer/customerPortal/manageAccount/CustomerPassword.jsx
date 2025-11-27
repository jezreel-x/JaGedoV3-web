const CustomerPassword = () => {
  return (
      <section className='ml-80 p-8 max-w-2xl'>
        <h4 className='text-gray-600 mb-2'>Change your password</h4>

        <h1 className='font-bold text-3xl mb-4'>Password</h1>
        <p className='text-gray-600 mb-8'>
          Your password must be at least 8 characters long,
          and contain at least one digit and one non-digit character
        </p>

        <form className='space-y-6'>
          <div className='flex flex-col space-y-2'>
            <label className='font-medium text-gray-700'>Old Password</label>
            <input 
              type="password" 
              className='border-b pb-2 focus:outline-none focus:border-b-2 focus:border-blue-900 transition-all'
            />
          </div>

          <div className='flex flex-col space-y-2'>
            <label className='font-medium text-gray-700'>New Password</label>
            <input 
              type="password"
              className='border-b pb-2 focus:outline-none focus:border-b-2 focus:border-blue-900 transition-all'
            />
          </div>

          <div className='flex flex-col space-y-2'>
            <label className='font-medium text-gray-700'>Confirm Password</label>
            <input 
              type="password"
              className='border-b pb-2 focus:outline-none focus:border-b-2 focus:border-blue-900 transition-all'
            />
          </div>

          <button type='button'
            className='bg-[rgb(0,0,122)] text-white px-6 py-2 rounded-lg hover:bg-[rgb(0,0,150)] transition-colors duration-200 font-medium mt-4'
          >
            Update
          </button>
        </form>

      </section>
  )
}

export default CustomerPassword