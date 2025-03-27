import { useState, useEffect, useDebugValue } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);

  useEffect(() => {
    async function fetchPizzaOfTheDay() {
      const response = await fetch(`${apiUrl}/api/pizza-of-the-day`);
      const data = await response.json();
      setPizzaOfTheDay(data);
    }

    fetchPizzaOfTheDay();
  }, []);

  useDebugValue(pizzaOfTheDay ? pizzaOfTheDay.name : "loading");

  return pizzaOfTheDay;
};
