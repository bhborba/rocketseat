import React, { Component } from 'react';

import profile from '../assets/profile.png'
import PostItem from './PostItem';

class PostList extends Component {
    state = {
        posts: [
            {
                id: 1,
                author: {
                    name: 'Junim',
                    avatar: `${profile}`
                },
                date: '04 Jun 2019',
                content: 'Mussum Ipsum, cacilds vidis litro abertis. Mé faiz elementum girarzis, nisi eros vermeio. A ordem dos tratores não altera o pão duris. Detraxit consequat et quo num tendi nada. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
                comments: [
                    { 
                        id: 1,
                        author: {
                            name: 'Felipe',
                            avatar: `${profile}`,
                        },
                    content: 'Mussum Ipsum, cacilds vidis litro abertis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Quem num gosta di mé, boa gentis num é. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Aenean aliquam molestie leo, vitae iaculis nisl.',
                    },
                    { 
                        id: 2,
                        author: {
                            name: 'Mussum',
                            avatar: `${profile}`,
                        },
                    content: 'Mussum Ipsum, cacilds vidis litro abertis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Quem num gosta di mé, boa gentis num é. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Aenean aliquam molestie leo, vitae iaculis nisl.',
                    },
                ]
            },{
                id: 2,
                author: {
                    name: 'Marcelo',
                    avatar: `${profile}`
                },
                date: '02 Ago 2019',
                content: 'Mussum Ipsum, cacilds vidis litro abertis. Aenean aliquam molestie leo, vitae iaculis nisl. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
                comments: [
                    { 
                        id: 1,
                        author: {
                            name: 'Carlos',
                            avatar: `${profile}`,
                        },
                    content: 'Mussum Ipsum, cacilds vidis litro abertis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Quem num gosta di mé, boa gentis num é. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Aenean aliquam molestie leo, vitae iaculis nisl.',
                    },
                ]
            },
        ]
    };

    render() {
        const { posts } = this.state;
    
        return (
          <div className="postlist">
            {posts.map(post => (
              <PostItem key={post.id} {...post} />
            ))}
          </div>
        );
      }
}


export default PostList;

