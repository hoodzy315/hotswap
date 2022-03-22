import React from "react";
const Trigger = ({ triggerText, buttonRef, showModal }) => {
    return (
        <button
            className="btn btn-lg btn-danger center modal-button btnFormat"
            ref={buttonRef}
            onClick={showModal}
        >
            {triggerText}
        </button>
    );
};
export default Trigger;
