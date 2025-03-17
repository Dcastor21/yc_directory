import React from "react";

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{post?.category} </p>
      </div>
    </li>
  );
};

export default StartupCard;
