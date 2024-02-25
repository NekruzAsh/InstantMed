import React, { memo } from 'react'

const items = [
    {name: 'Nekruz', description: 'Team Stuff',imageURL: "/images/nekruz.jpg" },
    {name: 'Luke', description: 'Team Stuff',imageURL: "/images/luke.jpg" },
    {name: 'Nurik', description: 'Team Stuff',imageURL: "/images/nurik.jpg" },
    {name: 'Ibrahim', description: 'Team Stuff',imageURL: "/images/ibra.jpg" },
  ];


const About = () => {
  return (
<div id="about" className="bg-[#59c082] mt-36">
    <h1 className=' ml-28 text-[50px]'><span className="text-[#089000]">//</span>Team Members</h1>
    <div className="flex justify-center items-center h-screen grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {items.map((item) => (
        <div className="flex flex-col items-center">
            <div className="rounded-full h-56 w-56 overflow-hidden">
                <img className="object-cover h-full w-full" src={item.imageURL} alt={item.name} />
            </div>
            <div className="mt-2 text-center">
                <h2 className="text-3xl font-semibold">{item.name}</h2>
                <p className="text-xl text-gray-500">{item.description}</p>
            </div>
        </div>
        ))}
    </div>
</div>
  )
}


export default About