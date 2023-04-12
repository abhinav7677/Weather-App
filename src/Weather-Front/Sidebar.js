import React from "react";
import "./Sidebar.css";
import "./Weather.css";
import background from "./media/cloud.jpg";

export default function Sidebar() {
  function copyToClipboard(event) {
    navigator.clipboard.writeText("abhinavhax7677@gmail.com");
    event.target.innerHTML = "Email Copied to clipboard";

    setTimeout(() => (event.target.innerHTML = "📎Email"), 3000);
  }

  return (
    <div className="Sidebar">
      <button title="Contact me" onClick={copyToClipboard}>
        📎Contact me
      </button>
      <hr />
      {/* <h4>Recent Search</h4>
      <div className="recent-search">{showHistory()}</div> */}
      {/* <hr /> */}
      <div
        className="extra-info credit"
        style={{ backgroundImage: `url(${background})` }}
      >
       
      </div>
    </div>
  );
}
