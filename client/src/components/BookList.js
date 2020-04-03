import React from "react";
import {gql} from 'apollo-boost'
import {graphql} from 'react-apollo'

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`

function BookList() {
  console.log(this.props);
  return (
    <div id="main">
      <ul id="book-list">
          <li>Book name</li>
      </ul>
    </div>
  );
}

export default graphql(getBooksQuery)(BookList);
