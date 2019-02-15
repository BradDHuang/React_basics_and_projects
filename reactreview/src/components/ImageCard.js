import React from "react";

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.imgRef = React.createRef();
        this.state = { spans: 0 };
    }
    
    componentDidMount() {
        // console.log(this.imgRef);
        // console.log(this.imgRef.current.clientHeight); // 0
        // Do not have the "height", yet!
        this.imgRef.current.addEventListener("load", this.setSpans);
    }
    setSpans = () => {
        // console.log(this.imgRef.current.clientHeight); // Not 0!
        const ch = this.imgRef.current.clientHeight;
        const spans = Math.ceil(ch / 10 + 1);
        this.setState({ spans });
    }
    
    render() {
        const { description, urls } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img
                    alt={description}
                    src={urls.regular}
                    ref={this.imgRef}
                />
            </div>
        );
    }
}

export default ImageCard;

