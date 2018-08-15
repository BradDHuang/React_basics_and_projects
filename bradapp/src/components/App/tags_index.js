
import React, {Component} from "react";

function Tag(props) {
    return (
        <div onClick={props.onClick} 
            style={{background: "black", 
                    color: "white",
                    marginRight: "20px", 
                    padding: "2px 10px",
                    borderRadius: "5px"
            }}>
            {props.tag}{" "}<i className="far fa-times-circle"></i>
        </div>
    );
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            tagInput: ""
        };
    }
    handleInputChange = (e) => {
        this.setState({ tagInput: e.target.value });
    }
    handleKeyDown = (e) => {
        
        console.log(e);
        if (e.keyCode === 13) {
            this.addTag(e.target.value);
        }
    }
    addTag = (tag) => {
        tag = tag.trim();
        // The indexOf() method returns the first index 
        // at which a given element can be found in the array, or -1 if it is not present.
        if ( !(this.state.tags.indexOf(tag) > -1) ) {
            this.setState({ tags: [...this.state.tags, tag] });
        }
        // clean up input:
        this.setState({ tagInput: "" });
    }
    removeTag = (removeTag) => {
        let filteredTags = this.state.tags.filter((tag) => tag !== removeTag);
        this.setState({ tags: filteredTags });
    }
    handleSubmit = e => {
        e.preventDefault();
    }
    render() {
        const {tags, tagInput} = this.state;
        return (
            
            // The onSubmit attribute fires when a form is submitted.

            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" value={tagInput} 
                        onChange={this.handleInputChange}
                        onKeyDown={this.handleKeyDown}
                        placeholder="Add a tag..."
                    />
                </div>
                <div style={{display: "flex"}}>
                    {
                        tags.map((tag, index) => {
                            return <Tag key={index} tag={tag} onClick={() => this.removeTag(tag)} />;
                        })
                    }
                </div>
            </form>
        );
    }
}

export default App;







