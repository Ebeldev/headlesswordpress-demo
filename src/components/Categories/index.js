import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_CATEGORIES = gql`
    query CategoryList {
  categories {
    edges {
      node {
        id
        name
        slug
        children {
          edges {
            node {
              name
              id
              slug
              children {
                edges {
                  node {
                    name
                    id
                    slug
                    children {
                      edges {
                        node {
                          name
                          id
                          slug
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

export default function Categories() {
    return (
        <Query query={GET_CATEGORIES}>
            {({ data, loading, error }) => {

                if (loading) return <p>A spinner</p>;
                if (error) return <p>ERROR {console.log(error)}</p>;

                { console.log(data.categories) }

                return (
                    <Fragment>
                        {data.categories &&
                            data.categories.edges &&
                            data.categories.edges.map(categorie => (
                                <div key={categorie.node.id}>
                                    <h2>Categorie name = {categorie.node.name}</h2>
                                    <p>slug = {categorie.node.slug}</p>
                                </div>
                            ))}
                    </Fragment>
                );
            }}
        </Query>
    );
};

