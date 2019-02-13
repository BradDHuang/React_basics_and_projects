import React from "react";

const Spinner = (props) => {
    return(
        // <div class="ui segment">
        <div className="ui active dimmer">
            <div className="ui text loader big">
                {props.msg}
            </div>
        </div>
        // </div>
    );
};

Spinner.defaultProps = {
    msg: "Loading..."
};

export default Spinner;

