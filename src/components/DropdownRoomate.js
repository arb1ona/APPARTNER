import React from 'react';
import Select from 'react-select';

const Roomates = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "3+", value: 4 }
];

const DropdownRoomate = () => (
    <div className="dropdown">
        <div className="dropdown-container">
            <Select id="hello" options={Roomates} placeholder="Roomates" />
        </div>
    </div>
);

export default DropdownRoomate;

    // import React from "react";
// import { Dropdown } from "semantic-ui-react";

// const roomateOptions = [
//     { key: "one", value: "one", text: "1" },
//     { key: "two", value: "two", text: "2" },
//     { key: "three", value: "three", text: "3" },
//     { key: "more", value: "more", text: "+3" }
// ];

// const DropdownRoomate = () => (
//     <Dropdown
//         placeholder="Roomates"
//         fluid
//         search
//         selection
//         options={roomateOptions}
//         style={{ width: "20rem" }}
//     />
// );

// export default DropdownRoomate;
