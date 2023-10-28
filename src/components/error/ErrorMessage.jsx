import React, { useState } from "react";
import "./ErrorMessage.scss";

const ErrorMessage = ({ error, retryFunc }) => {
  const retryAttempt = () => {
    retryFunc("");
  };
  return (
    <div className="error_wrapper">
      <div className="error_message_block">
        <h1 className="title">Error{`(((`}</h1>
        <h2 className="text_error">{error}</h2>
        <button onClick={retryAttempt} className="try_again_btn">
          Try again
        </button>
      </div>
    </div>
  );
};

export default ErrorMessage;
