import React from 'react'

export const Profile = () => {
  return (
    <section className='flex justify-center items-center h-screen w-full'> 
        <div className='md:w-[50vw] w-full h-5/6 lg:h-[100%] mx-5 mt-5  shadow-lg rounded-lg'>
            <form action="" method="get">
                <div className='text-center font-bold text-xl p-2'>Profile</div>
                <div className='mx-5 flex flex-col space-y-4'>
                    <div className='self-center'>
                        <div className="rounded-full h-40 w-40 flex items-center justify-center text-center">
                            <img
                            src={
                                
                                `https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg`
                            }
                            alt="image"
                            />
                        </div>
                    </div>
                    <div className="w-full relative">
                        <label htmlFor="name" className=''>Username</label>
                        <input
                        type="text"
                        name=""
                        id=""
                        placeholder="user"
                        className="w-full p-2 outline-none border border-gray/10 rounded"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="name">Email</label>
                        <input
                        type="email"
                        name=""
                        id=""
                        placeholder="user@gmail.com"
                        className="w-full p-2 outline-none border border-gray/10 rounded"
                        />
                    </div>
                    <div className="w-full">
                    <label htmlFor="name">Address</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Egbu, Owerri Imo State"
                        className="w-full p-2 outline-none border border-gray/10 rounded"
                    />
                    </div>
                    <div className="mx-2 self-end space-x-2">
                        <button type="submit" className="bg-ivory p-2 rounded shadow hover:shadow-lg">Cancel</button>
                        <button type="submit" className="bg-lightBrown text-ivory p-2 rounded shadow hover:shadow-lg">Save Changes</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
  )
}
