import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { countryToQuery } from "../helpers/countryToQuery";

export const usePeopleFetch = (loadMore) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const countries = useSelector((state) => state.filters.countries);
  const gender = useSelector((state) => state.filters.gender);

  ///Prepare filters to query
  const genderQuery = gender === "all" ? "" : gender;
  const countriesQuery = countryToQuery(countries);

  useEffect(() => {
    setUsers([]);
  }, [countries, gender]);
  useEffect(() => {
    loadMore !== 1 && fetchUsers();
  }, [loadMore]);

  async function fetchUsers() {
    setIsLoading(true);
    const response = await axios.get(
      `https://randomuser.me/api/?&nat=${countriesQuery}&results=5&gender=${genderQuery}`
    );

    setIsLoading(false);
    setUsers([...users, ...response.data.results]);
  }

  return { users, isLoading, fetchUsers };
};
