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
/*
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
*/

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import StreamCreate from './Streams/StreamCreate';
import StreamDelete from './Streams/StreamDelete';
import StreamEdit from './Streams/StreamEdit';
import StreamList from './Streams/StreamList';
import StreamShow from './Streams/StreamShow';
import Header from './Streams/Header';
/*
const PageOne = () => {
    return (
        <div>
            <h3>Page 1</h3>
            <Link to='/p2'>Nav to Page 2</Link>
        </div>
    );
};
const PageTwo = () => {
    return (
        <div>
            <h3>Page 2</h3>
            <Link to='/'>Nav to Page 1</Link>
        </div>
    );
};
*/
class App extends React.Component {
    render() {
        return(
            <div className='ui container'>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path='/' exact component={StreamList} />
                    <Route path='/streams/new' component={StreamCreate} />
                    <Route path='/streams/show' component={StreamShow} />
                    <Route path='/streams/edit' component={StreamEdit} />
                    <Route path='/streams/delete' component={StreamDelete} />
                </div>
            </BrowserRouter>
            </div>
        );
    }
}

export default App;
/*
Bad Navigation with <a /> tag:
    Browser receives index.html file,
    dumps old HTML file it was showing
    (including all of your React/Redux state data!)
Use <Link /> tag instead. (SPA)
*/

