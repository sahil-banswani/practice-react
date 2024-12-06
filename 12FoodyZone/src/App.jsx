import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [filterdData, setFilterdData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedButton, setSelectedButoon] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);

        const json = await response.json();
        console.log(json);
        setData(json);
        setFilterdData(json);
      } catch (error) {
        setError("Unable to fetch Data");
      } finally {
        setLoading(false);
      }
    };
    fetchFoodData();
  }, []);

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading...</div>;

  const filterBtn = [
    {
      name: "All",
      type: "All",
    },
    {
      name: "Breakfast",
      type: "Breakfast",
    },
    {
      name: "Lunch",
      type: "Lunch",
    },
    {
      name: "Dinner",
      type: "Dinner",
    },
  ];

  const searchFood = (event) => {
    const searchValue = event.target.value;

    if (searchValue === "") {
      setFilterdData(null);
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilterdData(filter);
  };

  const filterFood = (type) => {
    if (type === "all") {
      setFilterdData(data);
      setSelectedButoon("all");
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilterdData(filter);
    setSelectedButoon(type);
  };

  return (
    <>
      <Containers>
        <TopConatiner>
          <div className="logo">
            <img src="/images/logo.svg" alt="Foody Zone"></img>
          </div>

          <div className="search">
            <input onChange={searchFood} placeholder="Search Food" />
          </div>
        </TopConatiner>
        <FilterContainer>
          {filterBtn.map((value) => {
            return <Button key={value.name} onClick={() => filterFood(value.type)}>
              {value.name}
            </Button>;
          })}
        </FilterContainer>
      </Containers>
      <SearchResult data={filterdData}></SearchResult>
    </>
  );
};

export default App;

export const Containers = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const TopConatiner = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 32px 16px;
  margin-left: 16px;
  margin-right: 16px;
  align-items: center;

  .search {
    input {
      background-color: transparent;
      border: 2px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0px 10px;
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  background-color: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #440303;
  }
`;
