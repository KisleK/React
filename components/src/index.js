import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

//Long way!!!!
/*
Created main div with comments inside, copy and past, then change name and date and post
this takes a long time to create and update
why not make re-usable components

*/
const App =() => {
    return (// any time you want to put a big block of JSX use ()
        <div className="ui container comments">
            <CommentDetail/>
            <CommentDetail/>
            <CommentDetail/>
            <CommentDetail/>
            <CommentDetail/>
        </div>
    );
};


ReactDom.render(<App/>, document.querySelector('#root'));
