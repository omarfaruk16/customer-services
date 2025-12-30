import React from "react";
import SingleResolvedCard from "./SingleResolvedCard";

const ResolvedCard = ({ resolved, setresolved }) => {
  return (
    <div className="my-5 md:my-0 px-5 md:px-0">
      <h2 className="font-semibold text-2xl text-left mb-4">Resolved Task</h2>
      {resolved.length === 0 ? (
        <p>No resolved tasks yet.</p>
      ) : (
        resolved.map((card) => (
          <SingleResolvedCard
            key={card.id}
            card={card}
            resolved={resolved}
            setresolved={setresolved}
          />
        ))
      )}
    </div>
  );
};

export default ResolvedCard;
