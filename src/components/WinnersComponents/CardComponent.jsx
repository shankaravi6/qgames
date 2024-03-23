import React from 'react';

const CardComponent = () => {
  return (
    <div class="card-container flex flex-col gap-1">
            <img
              class="round"
              src="https://randomuser.me/api/portraits/men/22.jpg"
              alt="user"
            />
            <h3 className="text-orange-100">Ricky Park</h3>
            <h6 className="text-white">New York, US</h6>
            <div className="flex flex-row gap-28 pt-2">
                <div className="flex flex-col items-start"><span className="caption-text text-xl text-green-500">+1456</span><span className="caption-text text-xl">ROI</span></div>
                <div className="flex flex-col items-end"><span className="caption-text text-xl text-blue-500">+1456</span><span className="caption-text text-xl">Total Profit</span></div>
            </div>
            <div class="buttons flex gap-10 pt-2">
              <button class="primary">Message</button>
              <button class="primary ghost">Following</button>
            </div>
          </div>
  );
}

export default CardComponent;
