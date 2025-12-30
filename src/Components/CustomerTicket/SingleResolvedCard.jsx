import React from "react";

const SingleResolvedCard = ({ card, resolved, setresolved }) => {
    const removeResolved = (card) =>{
        const filtered_resolved = resolved.filter(p => p.title !==card.title)
        setresolved([...filtered_resolved])
    }
  return (
    <div className="card card-border bg-[#B9F8CF] shadow-sm p-4 mb-4">
      <div className="">
        <h2 className="card-title">{card.title}</h2>
        <div className="w-full pt-4 flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <i className="fa-solid fa-check text-green-600 "></i>
            <p className="text-green-600">Completed</p>
          </div>
          <p onClick={()=>removeResolved(card)} className="text-gray-500">Click to remove</p>
        </div>
      </div>
    </div>
  );
};

export default SingleResolvedCard;