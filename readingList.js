// create a class through the constructor invocation pattern 
// BookList = function() {}

var BookList= function(){
	/* properties of BookList
	Number of books marked as read (eg, BookList.booksRead)
	Number of books marked not read yet
	Next book to read(book object)(eg, BookList.nextBook() - returns a Book)
	Current book being read (book object)
	Last book read(book object)
	An array of all the Books (eg BookList.bookShelf - is an array.)
	*/

	this.booksRead = 0;
	this.bookstoRead = 0;
	
	this.nextBook = function(){

	};

	this.currentBook = currentBook;
	this.lastBookRead = lastBookRead;
	this.bookShelf = [];
	

	this.add = function(libro){
		this.bookShelf.push(libro);
		this.currentBook = libro;
		this.bookstoRead ++;
	};

	this.finishCurrentBook= function(libro){
		
	}
}


var Book = function(bookTitle, bookAuthor, bookGenre){
	this.bookTitle = bookTitle;
	this.bookAuthor = bookAuthor;
	this.bookGenre = bookGenre;
	this.read = false;
	this.readDate = null;
};

var pride = new Book("Pride and Prejudice","Libby", "Historical ROmance");


