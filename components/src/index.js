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
            <CommentDetail
                author="Sam"
                date="Today at 6:00PM"
                text="Wow! Nice post!"
                image={faker.image.avatar()}
            />
            <CommentDetail
                author="Alex"
                date={"Yesterday at 10:00AM"}
                text="Not the best post...."
                image={faker.image.avatar()}
            />
            <CommentDetail
                author="Jane"
                date="Friday at 2:00PM"
                text="Great Job"
                image={faker.image.avatar()}
            />

        </div>
    );
};


ReactDom.render(<App/>, document.querySelector('#root'));
