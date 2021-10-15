import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_WAR = gql`
  mutation addWar($city: String!, $time: String!, $date: String!) {
    addWar(city: $city, time: $time, date: $date) {
      _id
      city
      date
      time
      warAuthor
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const ADD_TO_WAR = gql`
  mutation addToWar($warId: ID!, $charLvl: String!, $primaryWep: String!, $primaryWepLvl: String!, $secondaryWep: String!, $secondaryWepLvl: String!, $role: String!) {
    addToWar(warId: $warId, charLvl: $charLvl, primaryWep: $primaryWep, primaryWepLvl: $primaryWepLvl, secondaryWep: $secondaryWep, secondaryWepLvl: $secondaryWepLvl, role: $role) {
      _id
      city
      date
      time
      warAuthor
      tanks {
        username
        charLvl
        primaryWep
        primaryWepLvl
        secondaryWep
        secondaryWepLvl
      }
      mdps {
        username
        charLvl
        primaryWep
        primaryWepLvl
        secondaryWep
        secondaryWepLvl
      }
      prdps {
        username
        charLvl
        primaryWep
        primaryWepLvl
        secondaryWep
        secondaryWepLvl
      }
      erdps {
        username
        charLvl
        primaryWep
        primaryWepLvl
        secondaryWep
        secondaryWepLvl        
      }
      healers {
        username
        charLvl
        primaryWep
        primaryWepLvl
        secondaryWep
        secondaryWepLvl 
      }
      artillery {
        username
        charLvl
        primaryWep
        primaryWepLvl
        secondaryWep
        secondaryWepLvl      
      }
    }
  }
`;

