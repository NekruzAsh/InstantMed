import React from "react";

const items = [
  { id: 1, name: "Ibuprofen", price: "$25.99" },
  { id: 2, name: "Aspirin", price: "$19.99" },
  { id: 3, name: "Paracetamol", price: "$15.99" },
  { id: 4, name: "Paracetamol", price: "$15.99" },
  { id: 5, name: "Paracetamol", price: "$15.99" },
  { id: 6, name: "Paracetamol", price: "$15.99" },
  
];

const ProductItems = () => {
  return (
   <div className="mt-48">
    <p className="md:ml-32 text-[45px] text-[#000000]"><span className="text-[#089000]">//</span>Health Shop</p>
    <div
      id="store"
      class="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-1 justify-items-center"
    >
      {items.map((item) => (
      
        <div key={item.id} className={`w-[240px] h-96`}>
          <div class="card">
            <div class="card-img">
              <img className="rounded-md" src="/images/pill.png" alt="drugs" width={100} height={100}/>
            </div>
            <div class="card-title">{item.name}</div>
            <div class="card-subtitle">
              Product description. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit.
            </div>
            <hr class="card-divider"></hr>
            <div class="card-footer">
              <div class="card-price">
                {item.price}
              </div>
              <button class="card-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path>
                  <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                  <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                  <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ProductItems;
