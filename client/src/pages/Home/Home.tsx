import { useCallback, useEffect, useState } from "react";

import { Button, Card, Input, Modal } from "antd";

import { useServices } from "../../providers/ServiceProvider";
import { BookResponse } from "../../api/books";

import "./styles.css";
import { debounce } from "../../shared/debounce";
import ObjectList from "../../components/ObjectList/ObjectList";
import EditBookModal from "./EditBookModal/EditBookModal";
import CreateBook from "./CreateBook/CreateBook";
import placeholder from "../../assets/book-placeholder.jpg";

const Home = () => {
  const { books } = useServices();

  const [booksState, setBooks] = useState<BookResponse[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [bookToEdit, setBookToEdit] = useState<BookResponse | null>(null);

  const updateBooks = useCallback(() => {
    books.getAllBooks(searchTerm).then(({ itens }) => setBooks(itens));
  }, [searchTerm, books]);

  useEffect(updateBooks, [updateBooks]);

  const deleteBook = (book: BookResponse) => {
    Modal.confirm({
      onOk: async () => await books.deleteBook(book.codigo),
      title: `Tem certeza que deseja excluir o livro ${book.titulo}?`,
    });
  };

  return (
    <>
      <Input
        className="home-component-search-book-input"
        placeholder="Livro de interesse"
        onChange={(evt) =>
          debounce(() => setSearchTerm(evt.target.value), 500)()
        }
      />
      <CreateBook onCreate={updateBooks} />
      <div className="home-component-card-container">
        {booksState.map(({ image, ...boook }) => (
          <Card
            bodyStyle={{ padding: 0 }}
            className="home-component-card"
            key={boook.codigo}
            cover={
              <span className="home-component-card-cover">
                <img
                  className="home-component-card-image"
                  src={image ?? placeholder}
                  alt="Cover"
                />
              </span>
            }
            actions={[
              <Button onClick={() => setBookToEdit(boook)}>Editar</Button>,
              <Button danger onClick={() => deleteBook(boook)}>
                Excluir
              </Button>,
            ]}
          >
            <ObjectList className="home-component-card-list" obj={boook} />
          </Card>
        ))}
      </div>
      <EditBookModal
        bookToEdit={bookToEdit}
        onClose={() => {
          setBookToEdit(null);
          updateBooks();
        }}
      />
    </>
  );
};

export default Home;
