import React from "react";

const ImageList = (props) => {
    // console.log(props.images);
    const imgs = props.images.map(({ id, urls, description }) => {
        return <img key={id} src={urls.regular} alt={description}/>;
    });
    return <div>{imgs}</div>;
};

export default ImageList;

