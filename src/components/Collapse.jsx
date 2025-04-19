import React from 'react';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import "./Collapse.Scss";

const chevronDown = <FontAwesomeIcon icon={faChevronDown} />;
const chevronUp = <FontAwesomeIcon icon={faChevronUp} />;

function Collapse(props) {
    const [openTab, setOpenTab] = useState(false);

    const openTabHandler = () => {
        setOpenTab((openTab) => !openTab);
    };

    return (
        <>
            <div onClick={openTabHandler} className="collapse_header">
                <h2 className="collapse_header_title">{props.title}</h2>
                {!openTab ? <i className="collapse_header_icon">{chevronDown}</i> : <i className="collapse_header_icon">{chevronUp}</i>}
            </div>
            {openTab &&
                <div className="collapse_content">{props.content}</div>
            }
        </>
    )
}

export default Collapse;