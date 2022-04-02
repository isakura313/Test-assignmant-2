import React from 'react'
import styled from "styled-components"


function ProfilePic({children, ...props}) {
    return (
        <img width = {"290px"} height={"320px"} src={props.src}/>
    )
}

export default ProfilePic