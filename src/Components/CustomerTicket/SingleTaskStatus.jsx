import React from "react";

const SingleTaskStatus = ({card, resolved, setresolved, inProgress, setinProgress}) => {
    const addresolved = (card) =>{
        setresolved([...resolved,card])
        removeTaskStatus(card)
    }
    const removeTaskStatus = (card) =>{
        const filtered_Task = inProgress.filter(p => p.title !==card.title)
        setinProgress([...filtered_Task])
    }
  return (
    <div className="card card-border bg-base-100 shadow-sm p-4 mb-4">
      <div className="">
        <h2 className="card-title">{card.title}</h2>
        <div className="w-full pt-4">
          <button onClick={()=>addresolved(card)} className="btn w-full bg-[#02A53B] text-white">
            Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleTaskStatus;