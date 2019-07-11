import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_POSTS = gql`
    query GET_POSTS {
        posts {
            edges {
                node {
                    id
                    title
                    date
                }
            }
        }
    }
`;

export default function Posts() {
    return (
        <Query query={GET_POSTS}>
            {({ data, loading, error }) => {
                
                if (loading) return <p>A spinner</p>;
                if (error) return <p>ERROR {console.log(error)}</p>;
                
                { console.log(data.posts.edges) }

                return (
                    <Fragment>
                        {data.posts &&
                            data.posts.edges &&
                            data.posts.edges.map(post => (
                                <div key={post.node.id}>
                                    <h2>{post.node.title}</h2>
                                    <p>{post.node.date}</p>
                                </div>
                            ))}
                    </Fragment>
                );
            }}
        </Query>
    );
};
        
