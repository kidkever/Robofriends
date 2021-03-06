import React from "react";

interface CardStatelessProps {
  name: string;
  id: number;
  email: string;
}

const Card: React.FunctionComponent<CardStatelessProps> = ({
  id,
  name,
  email,
}: any) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        src={`https://robohash.org/${id}?size=525x525`}
        alt="robots"
        style={{ width: "200px", height: "200px" }}
      />
      <div>
        <h2 className="mt2 mb1">{name}</h2>
        <p className="mt1 mb1">{email}</p>
      </div>
    </div>
  );
};

export default Card;
