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
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">
                            Today at 6:00PM
                        </span>
                    </div>
                    <div className="text">
                        Nice blog post!
                    </div>
                </div>
            </div>

            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">
                            Today at 6:00PM
                        </span>
                    </div>
                    <div className="text">
                        Nice blog post!
                    </div>
                </div>
            </div>

            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">
                            Today at 6:00PM
                        </span>
                    </div>
                    <div className="text">
                        Nice blog post!
                    </div>
                </div>
            </div>
        </div>
    );
};


ReactDom.render(<App/>, document.querySelector('#root'));
