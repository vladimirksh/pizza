import React, { useState, useEffect } from "react";

import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import Pizza from "../components/Pizza/Pizza";
import PizzaSkeleton from "../components/PizzaSkeleton/PizzaSkeleton";

function Main(props) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://62c828458c90491c2cb00d05.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, i) => <PizzaSkeleton key={i} />)
          : items.map((item) => <Pizza {...item} key={item.id} />)}
      </div>
    </>
  );
}

export default Main;
