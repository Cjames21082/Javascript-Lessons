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

	this.booksToRead = 0;

	this.nextBook = function(){
        //console.log(this.bookShelf);
		for(var b in this.bookShelf){
           //console.log(this.bookShelf[b].read)
			if(this.bookShelf[b].read === false){
                var nextBook = this.bookShelf[b];
                //console.log(nextBook);
				return nextBook;
			}
		}
	};

	this.currentBook = function(){
        var currentBook = this.nextBook();
        //console.log(currentBook);
		return currentBook;
	};

	this.lastBookRead = function(){
		for(var i= 0; i < this.bookShelf.length; i++){
			if (i === this.bookShelf.length && this.bookShelf[i] === true){
				return this.bookShelf[i];
			}
			else if (this.bookShelf[i].read === true && this.bookShelf[i+1].read === false) {
				return this.bookShelf[i];
			}
			else{
				console.log("No book last read.");
			}
		}
	};

	this.bookShelf = [];

	this.add = function(Book){
		this.bookShelf.push(Book);
		this.booksToRead++;
	};

	this.finishCurrentBook= function(){
		var finishBook = this.currentBook();
		this.finishBook.read = true;
		this.finishBook.readDate = new Date(dateString);
		this.booksRead++;
		this.booksToRead--;
		return ;
	};
};


var Book = function(bookTitle, bookAuthor, bookGenre){
	this.bookTitle = bookTitle;
	this.bookAuthor = bookAuthor;
	this.bookGenre = bookGenre;
	this.read = false;
	this.readDate = null;
};

var cassieBooks = new BookList();


var pride = new Book("Pride and Prejudice","Libby", "Historical Romance");
var toyStory = new Book("Toy Story", "Disney", "Family");

cassieBooks.add(pride);
cassieBooks.add(toyStory);



