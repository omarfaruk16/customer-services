import React from "react";
import greenIcon from "../../assets/Ellipse_22.png";
import yellowIcon from "../../assets/Ellipse_21.png";
import dataIcon from "../../assets/Vector.png";

const SingleCard = ({ singleData, inProgress, setinProgress, customerTicketData }) => {
  const addingCard = (singleData) => {
    setinProgress([...inProgress, singleData]);
    removeCard(singleData)

  };
  const removeCard = (singleData) =>{
        const filtered_Data = customerTicketData.filter(p => p.title !==singleData.title)
        customerTicketData([...filtered_Data])
        

    }
  return (
    <div
      onClick={() => addingCard(singleData)}
      role="button"
      tabIndex={0}
      className="card bg-base-100 md:w-115 shadow-sm p-4 mb-5 md:mb-0"
    >
      <div className="card-body">
        <div className="flex justify-between">
          <h4 className="text-lg font-semibold">{singleData.title}</h4>
          <div
            className={`py-1 px-3 rounded-3xl flex gap-1 items-center justify-between ${
              singleData.status === "Open" ? "bg-[#B9F8CF]" : "bg-[#F8F3B9]"
            }`}
          >
            <img
              className="w-4 h-4"
              src={singleData.status === "Open" ? greenIcon : yellowIcon}
              alt=""
            />
            <p className="text-green-800 text-[16px] font-semibold">
              {singleData.status}
            </p>
          </div>
        </div>
        <div className="py-2">
          <p className="text-[#627382]">{singleData.description}</p>
        </div>
        <div className="text-[16px] md:flex justify-between items-center">
          <div className="flex md:gap-4 justify-between mb-2 md:mb-0">
            <p className="text-[#627382]">ID: {singleData.id}</p>
            <p className="text-[#F83044]">Priority: {singleData.priority}</p>
          </div>
          <div className="flex gap-4 justify-between">
            <p className="text-[#627382]">{singleData.customer}</p>
            <div className="flex gap-2 justify-end">
              <img className="w-[20px] h-[20px]" src={dataIcon} alt="" />
              <p className="text-[#627382]">{singleData.createdAt}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;