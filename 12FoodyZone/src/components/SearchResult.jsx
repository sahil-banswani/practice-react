import React from "react";
import styled from "styled-components";
import { BASE_URL, Button, Containers } from "../App";

const SearchResult = ({ data }) => {
  if (!Array.isArray(data)) {
    return <p>No Data Available</p>;
  }
  return (
    <FoodCardConatiner>
      <Containers>
        <FoodCards>
          {data?.map((food) => {
            return (
              <FoodCard key={food.name}>
                <div className="food_image">
                  <img src={BASE_URL + food.image} alt="" />
                </div>
                <div className="food_info">
                  <h3> {food.name}</h3>
                  <p> {food.text}</p>
                </div>
                <Button>$ {food.price.toFixed(2)}</Button>
              </FoodCard>
            );
          })}
        </FoodCards>
      </Containers>
    </FoodCardConatiner>
  );
};

export default SearchResult;

const FoodCardConatiner = styled.section`
  min-height: calc(100vh - 210px);
  display: flex;
  width: 100%;
  background-image: url("/images/bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const FoodCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 340px;
  height: 170px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 15px;
  margin: 15px;
  color: white;
  overflow: hidden;

  .food_image {
    flex-shrink: 0;
    width: 100px;
    height: 100px;
    border-radius: 10px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .food_info {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex: 1;
    margin-left: 15px;

    h3 {
      font-size: 18px;
      font-weight: bold;
      margin: 0;
    }

    p {
      font-size: 14px;
      line-height: 1.4;
      margin: 5px 0 10px;
      color: rgba(255, 255, 255, 0.8);
    }
  }

  button {
    background-color: #ff5252;
    color: white;
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 14px;
    border: none;
    cursor: pointer;
  }
`;

const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
`;
