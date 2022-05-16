import React, { useEffect, useState, useMemo } from 'react';
import { Magnifier, GlassMagnifier } from "react-image-magnifiers";

const MagnifierComponent = (props) => {

return(
    <div className='MagnifierComponent'>
        <GlassMagnifier style={{ height: "600px" , width: "80%", marginLeft: "10%"}} imageSrc={props.original} />
    </div>
)

}

export default MagnifierComponent;