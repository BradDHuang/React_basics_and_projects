import React from "react";

class SearchBar extends React.Component {
    
    state = { term: "" };
    
    // onInputChange(e) {
    //     console.log(e.target.value);
    // } // "this" in a func.
    onInputChange = (e) => {
        // console.log(e.target.value);
        this.setState({ term: e.target.value });
    }
    
    onFormSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    }
    
    render() {
        // return <div>Search Bar</div>;
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;

