class BookManager {
    #books;
    
     constructor(books) {
         this.#books = books;
     }
     get books (){
         return this.#books;
     }
     set books (books) {
         this.#books = books;
     }
}