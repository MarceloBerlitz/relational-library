import { useEffect, useState } from "react";

import { Card, Input } from "antd";
import { useServices } from "../../providers/ServiceProvider";
import { BookResponse } from "../../api/books";

import "./styles.css";

const Home = () => {
  const { books } = useServices();

  const [booksState, setBooks] = useState<BookResponse[]>([]);

  useEffect(() => {
    books.getAllBooks().then(({ itens }) => setBooks(itens));
  }, []);
  return (
    <>
      <Input
        className="home-component-search-book-input"
        placeholder="Livro de interesse"
      />
      <div className="home-component-card-container">
        {booksState.map(({ image, ...boook }) => (
          <Card
            className="home-component-card"
            cover={<img className="home-component-card-image" src={image} />}
          >
            {JSON.stringify(boook)}
          </Card>
        ))}
      </div>
    </>
  );
};

export default Home;
