import React, { useRef, useCallback, useState, loadMore } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";
import { useDispatch, useSelector } from "react-redux";
import { MenuItem, Select, InputLabel, FormControl } from "@material-ui/core";
import { useLocation } from "react-router";
import { toggleFavoriteAction } from "store/actions/favoritesActions";
import { genderAction, countriesAction } from "store/actions/filtersActions";

const UserList = ({ users, isLoading, setLoadMore }) => {
  const classes = S.useStyles();
  const location = useLocation();
  //infinite scroll utilities
  const observer = useRef();

  const lastUserShowing = useCallback((node) => {
    console.log("eeeh", node);
    if (isLoading || loadMore === 1 || location.pathname === "/favorites") return;
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setLoadMore((prev) => prev + 1);
      }
    });
    if (node) {
      //if node ->observer on div ref
      observer.current.observe(node);
    }
  }, []);

  const [hoveredUserId, setHoveredUserId] = useState();
  const countries = useSelector((state) => state.filters.countries);
  const gender = useSelector((state) => state.filters.gender);
  const favoritesList = useSelector((state) => state.favorites.favList);
  const dispatch = useDispatch();
  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  const handleFavoriteUser = () => {
    ///handle remove or add favorite
    if (!users[hoveredUserId].email) return;
    const checkUserFav = favoritesList.find(
      (user) => user.email === users[hoveredUserId].email
    );
    const actionType = checkUserFav ? "REMOVE_FAVORITE" : "ADD_FAVORITE";
    dispatch(toggleFavoriteAction(actionType, users[hoveredUserId]));
  };
  const handleIsVisible = (user, index) => {
    //handle show heart icon or not
    return (
      index === hoveredUserId || favoritesList.find((exist) => exist.email === user.email)
    );
  };
  const handleCountryFilter = (country) => {
    //handle countries filter
    const isChecked = countries[country];
    const actionType = isChecked ? "REMOVE_COUNTRY" : "ADD_COUNTRY";
    console.log("isChecked", isChecked);
    dispatch(countriesAction(actionType, country));
  };

  const handleGenderFilter = (e) => {
    const genderValue = e.target.value;
    dispatch(genderAction(genderValue));
  };

  return (
    <S.UserList>
      {location.pathname === "/" && (
        <S.Filters>
          <CheckBox
            isChecked={countries.BR}
            onChange={handleCountryFilter}
            value="BR"
            label="Brazil"
          />
          <CheckBox
            isChecked={countries.AU}
            onChange={handleCountryFilter}
            value="AU"
            label="Australia"
          />
          <CheckBox
            isChecked={countries.CA}
            onChange={handleCountryFilter}
            value="CA"
            label="Canada"
          />
          <CheckBox
            isChecked={countries.DE}
            onChange={handleCountryFilter}
            value="DE"
            label="Germany"
          />
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gender}
              onChange={handleGenderFilter}
            >
              <MenuItem value={"all"}>All</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
              <MenuItem value={"male"}>Male</MenuItem>
            </Select>
          </FormControl>
        </S.Filters>
      )}
      <S.List>
        {users.map((user, index) => {
          return (
            <S.User
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <S.UserPicture src={user?.picture.large} alt="" />
              <S.UserInfo>
                <Text size="22px" bold>
                  {user?.name.title} {user?.name.first} {user?.name.last}
                </Text>
                <Text size="14px">{user?.email}</Text>
                <Text size="14px">
                  {user?.location.street.number} {user?.location.street.name}
                </Text>
                <Text size="14px">
                  {user?.location.city} {user?.location.country}
                </Text>
              </S.UserInfo>
              <S.IconButtonWrapper
                onClick={handleFavoriteUser}
                isVisible={handleIsVisible(user, index)}
              >
                <IconButton>
                  <FavoriteIcon color="error" />
                </IconButton>
              </S.IconButtonWrapper>
            </S.User>
          );
        })}

        <div
          style={{
            position: "relative",
            marginBottom: "20px",
          }}
          ref={lastUserShowing}
        />

        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;
