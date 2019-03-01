/*import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
                <div className="column eight wide">
                    <SongDetail />
                </div>
            </div>
        </div>
    );
};

export default App;
*/

// https://jsonplaceholder.typicode.com/

import React from 'react';
import PostList from './PostList';

class App extends React.Component {
    render() {
        return(
            <div className="ui container">
                <PostList />
            </div>
        );
    }
}

export default App;

