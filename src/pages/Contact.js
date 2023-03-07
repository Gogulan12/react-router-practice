import React from "react";
import { useLocation } from "react-router-dom";

export default function Contact() {
  // useLocation() lots of information on the current location that we are on in the browser
  //
  const queryString = useLocation().search;
  console.log(queryString);

  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name");

  return (
    <div>
      <h2>Hey {name}, Contact us here...</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, sunt vel!
        Assumenda quasi, ratione ipsa nobis accusantium dicta officiis explicabo
        voluptas repellat quis commodi dolorum voluptate culpa fugiat itaque
        repudiandae?
      </p>
    </div>
  );
}
