import React from "react";
import { usePeopleStore } from "../store";

const People = () => {
  const people = usePeopleStore((state) => state.people);
  return (
    <div>
      <p>We have {people.length} People in out store</p>
      <ul>
        {people.map((person) => (
          <li>{person}</li>
        ))}
      </ul>
    </div>
  );
};

export default People;
