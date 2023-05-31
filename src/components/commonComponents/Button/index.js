import React from "react";
export default function Button({title, styles}){
    return (
      <>
        <button className="button" style={styles}>{title}</button>
      </>
    );
}