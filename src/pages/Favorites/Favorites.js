import React from "react";
import * as S from "../Home/style";
import Text from "components/Text";
import { useSelector } from "react-redux";
import UserList from "components/UserList";

const Favorites = () => {
  const favList = useSelector((state) => state.favorites.favList);

  return (
    <S.Content>
      <S.Header>
        <Text size="64px" bold>
          Favorites
        </Text>
      </S.Header>
      <UserList users={favList} isLoading={false} />
    </S.Content>
  );
};
export default Favorites;
