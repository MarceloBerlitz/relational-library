import { useEffect, useState } from "react";

import { Button, Card, Input } from "antd";

import { useServices } from "../../providers/ServiceProvider";
import { BookResponse } from "../../api/books";

import "./styles.css";
import { debounce } from "../../shared/debounce";
import ObjectList from "../../components/ObjectList/ObjectList";
import EditBookModal from "./EditBookModal/EditBookModal";

const Home = () => {
  const { books } = useServices();

  const [booksState, setBooks] = useState<BookResponse[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [bookToEdit, setBookToEdit] = useState<BookResponse | null>(null);

  useEffect(() => {
    books.getAllBooks(searchTerm).then(({ itens }) => setBooks(itens));
  }, [searchTerm, books]);

  return (
    <>
      <Input
        className="home-component-search-book-input"
        placeholder="Livro de interesse"
        onChange={(evt) =>
          debounce(() => setSearchTerm(evt.target.value), 500)()
        }
      />
      <div className="home-component-card-container">
        {booksState.map(({ image, ...boook }) => (
          <Card
            bodyStyle={{ padding: 0 }}
            className="home-component-card"
            key={boook.codigo}
            cover={
              <img
                className="home-component-card-image"
                src={image}
                alt="Cover"
              />
            }
            actions={[
              <Button onClick={() => setBookToEdit(boook)}>Editar</Button>,
            ]}
          >
            <ObjectList className="home-component-card-list" obj={boook} />
          </Card>
        ))}
      </div>
      <EditBookModal
        bookToEdit={bookToEdit}
        onClose={() => setBookToEdit(null)}
      />
    </>
  );
};

export default Home;
