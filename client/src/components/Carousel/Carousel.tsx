import { BookRow, Book } from "./styles"

const livros = ['A revolução dos bichos',
                 'A arte da Guerra',
                 '1984',
                 'A origem das espécies']

export const BookSheel = () => {
    return (
        <BookRow autoplay>
           {livros.map(livro => <Book>{livro}</Book>)} 
        </BookRow>)
}