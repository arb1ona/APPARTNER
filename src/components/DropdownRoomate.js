import React from "react";
import { Dropdown } from "semantic-ui-react";

const roomateOptions = [
    { key: "one", value: "one", text: "1" },
    { key: "two", value: "two", text: "2" },
    { key: "three", value: "three", text: "3" },
    { key: "more", value: "more", text: "+3" }
];

const DropdownRoomate = () => (
    <Dropdown
        placeholder="Roomates"
        fluid
        search
        selection
        options={roomateOptions}
        style={{ width: "20rem" }}
    />
);

export default DropdownRoomate;
