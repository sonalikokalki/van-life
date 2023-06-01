import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
export default function VanDetails() {
  const params = useParams();
  console.log(params);
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [params.id]);
  return (
    <>
      <div className="about">
        <h1>This is van details page</h1>
      </div>
    </>
  );
}