import React from "react";
/**
 * Author: Joe Woods
 * This component handles the custom trigger button
 */

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
