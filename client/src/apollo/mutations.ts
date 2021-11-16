import gql from 'graphql-tag';

export const CREATE_NEW_BLOG = gql`
  mutation createBlog(
    $title: String!
    $description: String!
    $text: String!
    $date: String!
  ) {
    createBlog(
      blogInput: {
        title: $title
        description: $description
        text: $text
        date: $date
      }
    ) {
      title
      description
      text
      date
    }
  }
`;

export const CREATE_PROJECT = gql`
  mutation createProject(
    $title: String!
    $desc: String!
    $link: String!
    $demolink: String!
  ) {
    createProject(
      projectInput: {
        title: $title
        desc: $desc
        link: $link
        demolink: $demolink
      }
    ) {
      title
      desc
      demolink
      link
    }
  }
`;

export const UPDATE_BLOG = gql`
  mutation updateBlog(
    $id: ID!
    $title: String!
    $description: String!
    $text: String!
  ) {
    updateBlog(id: $id, title: $title, description: $description, text: $text) {
      _id
      title
      description
      text
    }
  }
`;

export const UPDATE_ABOUT = gql`
  mutation updateAbout(
    $id: ID!
    $desc: String!
    $email: String!
    $skills: [String!]
  ) {
    updateAbout(id: $id, desc: $desc, email: $email, skills: $skills) {
      _id
      skills
      desc
      email
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation updateProject(
    $id: ID!
    $title: String!
    $desc: String!
    $demolink: String!
    $link: String!
  ) {
    updateProject(
      id: $id
      title: $title
      desc: $desc
      demolink: $demolink
      link: $link
    ) {
      _id
      title
      desc
      demolink
      link
    }
  }
`;

export const DELETE_BLOG = gql`
  mutation removeBlog($id: ID!) {
    removeBlog(id: $id) {
      _id
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation removeProject($id: ID!) {
    removeProject(id: $id) {
      _id
    }
  }
`;

export default {
  CREATE_NEW_BLOG,
  CREATE_PROJECT,
  UPDATE_BLOG,
  UPDATE_ABOUT,
  UPDATE_PROJECT,
  DELETE_BLOG,
  DELETE_PROJECT,
};
