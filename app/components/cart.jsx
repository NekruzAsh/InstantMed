import React from 'react';


const items = [
    { index: 1, name: 'Ibuprofen', price: '$25.99', image: "/images/pill.png", description:
             "Product description. Lorem ipsum dolor sit amet, consecteturadipisicing elit. Product description. Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { index: 2, name: 'Advil', price: '$19.99', image: "/images/pill.png", description:
    "Product description. Lorem ipsum dolor sit amet, consecteturadipisicing elit. Product description. Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { index: 3, name: 'Paracetamol', price: '$27.99', image: "/images/pill.png", description:
             "Product description. Lorem ipsum dolor sit amet, consecteturadipisicing elit. Product description. Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { index: 4, name: 'Aspirin', price: '$9.99', image: "/images/pill.png", description:
    "Product description. Lorem ipsum dolor sit amet, consecteturadipisicing elit. Product description. Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
];



const Cart = () => {
  return (
    <div id="cart" className='flex justify-center items-center bg-gray-100'>


      <div className='top-8 right-5 h-[300px] w-[300px] bg-red-200 rounded-md'>
      <div className='ml-[20px] mt-[20px]'>
        <h1 className='text-[40px]'>Order Summary</h1>
        <h2 className='pt-1 text-[14px] flex-1'>Total: </h2>
        <h2 className='pt-1 text-[14px]'>Shipping & Handling:</h2>
        <h2 className='pt-1 text-[18px]'>Tax to be collected:</h2>
        <h1 className='pt-1 font-bold text-red-500 text-[18px]'>Order Total:</h1>
      </div>
      </div>

      
        <div>
        <div className='w-[1000px] bg-gray-200 px-6 py-6 mx-auto'>
            <div className='shadow-md rounded-lg p-4'>
            <h1 className='text-3xl font-bold p-4'>Shipping Address</h1>

            <div className="flex flex-wrap">

                <div className="w-full sm:w-1/2 pr-4">
                <label htmlFor="inputname" className="block text-gray-800 font-semibold text-sm">Name</label>
                <div className="mt-2">
                    <input
                    type="text"
                    name="inputname"
                    className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                    />
                </div>
                </div>


                <div className="w-full sm:w-1/2 pl-4">
                <label htmlFor="inputname" className="block text-gray-800 font-semibold text-sm">Street Address</label>
                <div className="mt-2">
                    <input
                    type="text"
                    name="inputname"
                    className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                    />
                </div>
                </div>


                <div className=" w-64 pr-8">
                <label htmlFor="inputname" className="block text-gray-800 font-semibold text-sm">City</label>
                <div className="mt-2">
                    <input
                    type="text"
                    name="inputname"
                    className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                    />
                </div>
                </div>


                <div className="w-[220px] pr-8">
                <label htmlFor="inputname" className="block text-gray-800 font-semibold text-sm">State</label>
                <div className="mt-2">
                    <input
                    type="text"
                    name="inputname"
                    className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                    />
                </div>
                </div>


                <div className="w-[188px] pr-8">
                <label htmlFor="inputname" className="block text-gray-800 font-semibold text-sm">Postal Code</label>
                <div className="mt-2">
                    <input
                    type="text"
                    name="inputname"
                    className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                    />
                </div>
                </div>

                <div className=" w-64">
                <label htmlFor="inputname" className="block text-gray-800 font-semibold text-sm">Apt, Suite, Floor</label>
                <div className="mt-2">
                    <input
                    type="text"
                    name="inputname"
                    className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                    />
                </div>
                </div>
            </div>
            </div>
        </div>






        <div className='w-[1000px] bg-gray-200 px-6 py-6 mx-auto'>
            <div className='shadow-md rounded-lg p-4'>
            <h1 className='text-3xl font-bold p-4'>Payment Information</h1>

            <div className="flex flex-wrap">

                <div className="w-full sm:w-1/2 pr-4">
                <label htmlFor="inputname" className="block text-gray-800 font-semibold text-sm">Card Number</label>
                <div className="mt-2">
                    <input
                    type="text"
                    name="inputname"
                    className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                    />
                </div>
                </div>


                <div className="w-full sm:w-1/2 pl-4">
                <label htmlFor="inputname" className="block text-gray-800 font-semibold text-sm">Name on Card</label>
                <div className="mt-2">
                    <input
                    type="text"
                    name="inputname"
                    className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                    />
                </div>
                </div>


                <div className=" w-64 pr-8">
                <label htmlFor="inputname" className="block text-gray-800 font-semibold text-sm">Expiration Date</label>
                <div className="mt-2">
                    <input
                    type="text"
                    name="inputname"
                    className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                    />
                </div>
                </div>


                <div className="w-[220px] pr-8">
                <label htmlFor="inputname" className="block text-gray-800 font-semibold text-sm">CVV</label>
                <div className="mt-2">
                    <input
                    type="text"
                    name="inputname"
                    className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                    />
                </div>
                </div>


                <div className="w-[188px] pr-8">
                <label htmlFor="inputname" className="block text-gray-800 font-semibold text-sm">Postal Code</label>
                <div className="mt-2">
                    <input
                    type="text"
                    name="inputname"
                    className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                    />
                </div>
                </div>

                <div className=" w-64">
                <label htmlFor="inputname" className="block text-gray-800 font-semibold text-sm">Apt, Suite, Floor</label>
                <div className="mt-2">
                    <input
                    type="text"
                    name="inputname"
                    className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                    />
                </div>
                </div>
            </div>
            </div>
        </div>




        <div className='w-[1000px] bg-gray-200 px-6 py-6 mx-auto'>
        <div className='shadow-md rounded-lg p-4'>
            <h1 className='text-3xl font-bold p-4'>Shopping Cart</h1>

            {items.map((items) => (
                <div key={items.index} className="flex flex-wrap shadow-md rounded-lg p-4">
                    <div>
                        <img src={items.image} alt={items.name} className='w-[150px] h-[150px]'/>
                    </div>
                    <div className='ml-[50px]'>
                        <h1 className='font-bold text-2xl'>{items.name}</h1>
                        <p>{items.price}</p>
                        <p className='w-[650px]'>{items.description}</p>
                       
                    </div>
                </div>
            ))}
            </div>
        </div>




      </div>
    </div>
  );
};

export default Cart;
