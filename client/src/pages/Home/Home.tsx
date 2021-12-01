import { useState } from "react";

import { Input } from "antd";

const Home = () => {
  const [bookName, setBookName] = useState("");
  return (
    <>
      {bookName}
      <Input
        placeholder="Livro de interesse"
        onChange={(e) => setBookName(e.target.value)}
      />
    </>
  );
};

export default Home;