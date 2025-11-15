import axios from "axios";
import Book from "../models/Book.js";

class BookService {

    private static readonly api = axios.create({
        baseURL: import.meta.env.VITE_BACKEND_URL,
        headers: {
            'Content-Type': 'application/json',
        },
    });
    // Service methods would go here
    public static getBooks(): Book[] {
        // Implementation to fetch books
        const response = this.api.get("/books");

        console.log(response);

        return [];
    }

    public static addBook(book: Book): void {
        // Implementation to add a book
    }

    public static removeBook(bookTitle: string): void {
        // Implementation to remove a book
    }

    public static updateBook(book: Book): void {
        // Implementation to update a book
    }

    public static findBookByTitle(title: string): Book | null {
        // Implementation to find a book by title
        return null;
    }

    public static findBookById(id: number): Book | null {
        // Implementation to find a book by ID
        return null;
    }
}

export default BookService;