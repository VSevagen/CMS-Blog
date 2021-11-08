import gql from 'graphql-tag';

export const FETCH_BLOG = gql`
  query blogs {
    blogs {
      _id
      title
      description
      text
      date
    }
  }
`

export const FETCH_PROJECT = gql`
  query projects {
    projects {
      _id
      title
      desc
      demolink
      link
    }
  }
`

export const FETCH_ABOUT = gql`
  query about {
    about {
      _id
      name
      desc
      email
      skills
    }
  }
`

export const LOGIN_INFO = gql`
  query login {
    login {
      username
      password
    }
  }
`

export default {
  FETCH_PROJECT,
  FETCH_BLOG,
  FETCH_ABOUT,
  LOGIN_INFO
}
