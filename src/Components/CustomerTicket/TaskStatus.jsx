import React from "react";
import SingleTaskStatus from "./SingleTaskStatus"

const TaskStatus = ({inProgress, setinProgress, resolved, setresolved}) => {
  return (
    <div className="mb-4 my-5 md:my-0 px-5 md:px-0">
      <h2 className="font-semibold text-2xl text-left mb-4">Task Status</h2>
      {
        inProgress.length === 0 ? (
          <p>Select a ticket to add to Task Status</p>
        ) : (
          inProgress.map(card => (
            <SingleTaskStatus
              key={card.id}
              card={card}
              resolved={resolved}
              setresolved={setresolved}
              inProgress={inProgress}
              setinProgress={setinProgress}
            />
          ))
        )
    }
      
    </div>
  );
};

export default TaskStatus;