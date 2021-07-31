import React, { useState } from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch } from "hooks";
import * as S from "./style";
import Information from "../../components/Information";

const Home = () => {
  const [loadMore, setLoadMore] = useState(0);
  const { users, isLoading } = usePeopleFetch(loadMore);

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>

        <UserList
          loadMore={loadMore}
          setLoadMore={setLoadMore}
          users={users}
          isLoading={isLoading}
        />
      </S.Content>
      <Information totalUsers={users.length} />
    </S.Home>
  );
};

export default Home;
