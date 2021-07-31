import React from "react";
import * as S from "./style";
import Text from "components/Text";
import { useSelector } from "react-redux";

const Information = ({ totalUsers }) => {
  const favorites = useSelector((state) => state.favorites.favList);

  const favoritesCountry = (country) => {
    const count = favorites.filter((fav) => fav.location.country === country);
    return count.length;
  };
  const favoritesGender = (gender) => {
    const count = favorites.filter((fav) => fav.gender === gender);
    return count.length;
  };
  return (
    <S.Container>
      <S.TextContainer>
        <S.Header>
          <Text color={"primary"} size="46px" bold center>
            Information
          </Text>
        </S.Header>
        <Text size="20px" center>
          Total Users: {totalUsers}
        </Text>

        <Text color={"primary"} size="30px" bold center>
          Favorites
        </Text>
        <Text size="20px" center>
          Total Favorites: {favorites.length}
        </Text>
        <Text size="20px" center>
          Brazil Favorites: {favoritesCountry("Brazil")}
        </Text>
        <Text size="20px" center>
          Australia Favorites: {favoritesCountry("Australia")}
        </Text>
        <Text size="20px" center>
          Canada Favorites: {favoritesCountry("Canada")}
        </Text>
        <Text size="20px" center>
          Germany Favorites: {favoritesCountry("Germany")}
        </Text>
        <Text color={"primary"} size="30px" bold center>
          Genders
        </Text>
        <Text size="20px" center>
          Male: {favoritesGender("male")}
        </Text>
        <Text size="20px" center>
          Female: {favoritesGender("female")}
        </Text>
      </S.TextContainer>
    </S.Container>
  );
};
export default Information;
