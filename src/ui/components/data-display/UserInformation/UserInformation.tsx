import React from "react";
import {
  UserDescription,
  UserName,
  RatingStyled,
  AvatarStyled,
  UserInformationContainer,
} from "./UserInformation.style";

interface UserInformationProps {
  picture: string;
  name: string;
  rating: number;
  description?: string;
}

const UserInformation: React.FC<UserInformationProps> = (props) => {
  return (
    <UserInformationContainer>
      <AvatarStyled src={props.picture}>{props.name[0]}</AvatarStyled>
      <UserName>{props.name}</UserName>
      <RatingStyled readOnly value={props.rating}></RatingStyled>
      <UserDescription>{props.description}</UserDescription>
    </UserInformationContainer>
  );
};

export default UserInformation;
