import { useEffect, useState } from "react";
import { SearchInput } from "../../shared/ui/Input/SearchInput";
import "./Home.scss";
import { CategoriesNav } from "./components/CategoriesNav/CategoriesNav";
import { CoffeeBeans } from "./components/CoffeBeans/CoffeBeans";
import { Coffee } from "./components/Coffee/Coffee";
import coffeeData from '../../data/coffee.json';

export const Home = () => {
  const [filteredData, setFilteredData] = useState([]);

  const handleSearchSubmit = (searchTerm) => {
    console.log("Searching for:", searchTerm);
  };

  const filterCoffee = category => {
    const filtered = coffeeData.filter((item) => item.title.toLowerCase() === category || category === 'all');
    setFilteredData(filtered);
  }
  useEffect(() => {
   filterCoffee('all') 
  }, [])

  return (
    <section className="home">
      <h1 className="title">
        Find the best <br /> coffee for you
      </h1>

      <SearchInput onSubmit={handleSearchSubmit} />
      <CategoriesNav setActiveCategory={filterCoffee} />
      <Coffee coffeeData={filteredData} />
      <CoffeeBeans />
    </section>
  );
};
