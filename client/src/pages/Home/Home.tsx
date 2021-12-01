import { useEffect, useState } from "react";

import { Card, Input } from "antd";

import { useServices } from "../../providers/ServiceProvider";
import { BookResponse } from "../../api/books";

import "./styles.css";
import { debounce } from "../../shared/debounce";

const Home = () => {
  const { books } = useServices();

  const [booksState, setBooks] = useState<BookResponse[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    books.getAllBooks(searchTerm).then(({ itens }) => setBooks(itens));
  }, [searchTerm, books]);

  return (
    <>
      <Input
        className="home-component-search-book-input"
        placeholder="Livro de interesse"
        onChange={(evt) => debounce(() => setSearchTerm(evt.target.value), 500)()}
      />
      <div className="home-component-card-container">
        {booksState.map(({ image, ...boook }) => (
          <Card
            className="home-component-card"
            key={boook.codigo}
            cover={
              <img
                className="home-component-card-image"
                src={image}
                alt="Cover"
              />
            }
          >
            {JSON.stringify(boook)}
          </Card>
        ))}
      </div>
    </>
  );
};

export default Home;
