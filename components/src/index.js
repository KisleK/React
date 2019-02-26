import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

//Long way!!!!
/*
Created main div with comments inside, copy and past, then change name and date and post
this takes a long time to create and update
why not make re-usable components

*/
const App =() => {
    return (// any time you want to put a big block of JSX use ()
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    date="Today at 6:00PM"
                    text="Wow! Nice post!"
                    image={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    date={"Yesterday at 10:00AM"}
                    text="Not the best post...."
                    image={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    date="Friday at 2:00PM"
                    text="Great Job"
                    image={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};


ReactDom.render(<App/>, document.querySelector('#root'));
