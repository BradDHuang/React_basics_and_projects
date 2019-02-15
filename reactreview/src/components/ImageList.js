import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
    // console.log(props.images);
    // const imgs = props.images.map(({ id, urls, description }) => {
        // return <img key={id} src={urls.regular} alt={description}/>;
    const imgs = props.images.map((img) => {
        return <ImageCard key={img.id} image={img}/>;
    });
    return <div className="image-list">{imgs}</div>;
};

export default ImageList;

