import React, { useState } from 'react'

export const MateSelectDropdown = ({ roomMates }) => {

    const [currentMate, setCurrentMate] = useState('roomMates')
    const changeMate = (newMate) => {
        setCurrentMate(newMate)
    }

    return (
        <form>
            <select
                onChange={(event) => changeMate(event.target.value)}
                value={currentMate}
            >
                <div className="default_option">Roomates</div>
                <option value="one">1</option>
                <option value="two">2</option>
                <option value="three">3</option>
                <option value="more">+3</option>
            </select>
        </form>
    )
}

export default MateSelectDropdown;


