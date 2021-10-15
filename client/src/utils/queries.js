import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      wars {
        _id
        city
        date
        time
        warAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_WARS = gql`
  query getWars {
    wars {
      _id
      city
      date
      time
      warAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_WAR = gql`
  query getSingleWar($warId: ID!) {
    war(warId: $warId) {
      _id
      city
      date
      time
      warAuthor
      createdAt
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      wars {
        _id
        city
        date
        time
        warAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_DISCORD_USER = gql`
  query discordUser {
    discord {
      _id
      name 
      role
      level
      mainhand
      mainLvl
      secondary
      secondaryLvl
    }
  }
`;
