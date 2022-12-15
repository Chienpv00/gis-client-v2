import React, { Fragment } from 'react';
import { IImages } from '~/@types/inteface';

const Images = ({ alt, src, height, radius, width }: IImages) => {
    return (
        <img
            src={src}
            alt={alt}
            style={{
                width: `${width}px`,
                height: `${height}`,
                objectFit: 'cover',
                borderRadius: `${radius}px`,
            }}
        />
    );
};

export default Images;
