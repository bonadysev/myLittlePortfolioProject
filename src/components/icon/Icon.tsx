import React from 'react';
import iconsSprite from '../../assets/images/icons-sprite1.svg'

type IconsPropsType = {
    iconId:string
    width?:string
    height?:string
    viewBox?:string
}
export const Icon = (props:IconsPropsType) => {
    return (
        <svg width={props.width || "47"} height={props.height || "43"} viewBox={props.viewBox || "0 0 47 43"} fill="none" xmlns="http://www.w3.org/2000/svg" >
            <use xlinkHref={ `${iconsSprite}#${props.iconId}` }/>
        </svg>
    );
};
