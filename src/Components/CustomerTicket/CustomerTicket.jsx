import React, { use } from "react";
import SingleCard from "./SingleCard"


const CustomerTicket = ({DataPromise, inProgress, setinProgress}) => {
    const allData = use(DataPromise)
    const customerTicketData =[...allData]

    
    console.log(inProgress)
  return (
    <div className="px-5 md:px-0">
      <h2 className="font-semibold text-2xl text-left">Customer Ticket</h2>
      <div className="py-4 md:grid md:grid-cols-2 gap-y-4 gap-x-6">
        {
            customerTicketData.map(singleData =><SingleCard key={singleData.id} singleData={singleData} inProgress={inProgress} setinProgress={setinProgress} customerTicketData={customerTicketData}></SingleCard>)
        }
        
      </div>
    </div>
  );
};

export default CustomerTicket;
