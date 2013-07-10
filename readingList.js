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
		finishBook.read = true;
		finishBook.readDate = new Date();
		this.booksRead++;
		this.booksToRead--;
		return ;
	};
};


var Book = function(bookTitle, bookAuthor, bookGenre, bookImage){
	this.bookTitle = bookTitle;
	this.bookAuthor = bookAuthor;
	this.bookGenre = bookGenre;
	this.read = false;
	this.readDate = null;
	this.bookImage = bookImage;
};

//new BookList
var cassieBooks = new BookList();

//Books
var pride = new Book("Pride and Prejudice","Austen", "Historical Romance", "http://ecx.images-amazon.com/images/I/51EEPG81WVL.jpg");
var toyStory = new Book("Toy Story", "Disney", "Family", "http://www.oncenter.org/sites/default/files/events/toy-story-buzz-and-woody-wallpaper-desktop-film-movie.jpg");
var hungerGames = new Book ("Hunger Games", "Collins", "Young Adult", "http://latino-review.com/wp-content/uploads/2013/01/teaserposter-hungergames2.jpg");
var mockingbird = new Book("To Kill a Mockingbird", "Lee", "Fiction", "http://www.visitfortwayne.com/blog/wp-content/uploads/2013/03/mockingbird.jpg");
var animalFarm = new Book("Animal Farm", "Orwell","Fiction", "http://libraryaisles.files.wordpress.com/2013/05/animal-farm-book-cover.jpg");


//add books to Bookshelf
cassieBooks.add(pride);
cassieBooks.add(toyStory);
cassieBooks.add(hungerGames);
cassieBooks.add(mockingbird);
cassieBooks.add(animalFarm);


