import React from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg'

type IconsPropsType = {
    iconId:string
}
export const Icon = (props:IconsPropsType) => {
    return (
        <svg width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <use xlinkHref={ `${iconsSprite}#${props.iconId}` }/>
        </svg>
    );
};
