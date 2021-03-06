import gql from 'graphql-tag';

export const GET_USERINFO = gql`
  {
    me {
      id
      email
      nickname
      openImageChoice
      levelOf3Dae
      messageToFriend
      motivations {
        id
        motivation
      }
      weekdays {
        id
        weekday
      }
    }
  }
`;

export const GET_USERS = gql`
  {
    users {
      id
      email
      provider
      gender
      role
      nickname
      levelOf3Dae
      motivations {
        id
        motivation
      }
      weekdays {
        id
        weekday
      }
      followers {
        id
      }
      following {
        id
      }
      profileImage {
        id
        filename
      }
      ableDistricts {
        district {
          nameOfGu
          nameOfDong
        }
      }
      createdAt
      messageToFriend
    }
  }
`;

export const MUTATE_INFO = gql`
  mutation PostInfo(
    $nickname: String!
    $openImageChoice: OpenImageChoice!
    $levelOf3Dae: LevelOf3Dae!
    $messageToFriend: String
  ) {
    me(
      messageToFriend: $messageToFriend
      nickname: $nickname
      openImageChoice: $openImageChoice
      levelOf3Dae: $levelOf3Dae
    ) {
      messageToFriend
    }
  }
`;

export const GET_TOKEN = gql`
  query getLogin($email: String, $password: String) {
    login(email: $email, password: $password) {
      loginToken
      chatToken
      user {
        role
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation AddUser($email: String!, $password: String!) {
    registerForTest(email: $email, password: $password) {
      user {
        email
      }
    }
  }
`;
