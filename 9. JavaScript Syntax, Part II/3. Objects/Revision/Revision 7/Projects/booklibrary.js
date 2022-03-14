const library={
    genre:{
        fiction:[],
        thriller:[],
        adventure:[]
    },
    addBooksToLibrary(genreType,bookName,bookAuthor){
        const book={
            name:bookName,
            author:bookAuthor,
        }
        this.genre[genreType].push(book)
    },
    getRandomBook(genreType){
        let books=this.genre[genreType];
        let randomNumber=Math.floor(Math.random()*books.length)
        return books[randomNumber]
    },
    generateBookLists (){
        let fictionBook=this.getRandomBook('fiction');
        let thrillerBook=this.getRandomBook('thriller');
        let adventureBook=this.getRandomBook('adventure')
        return `Your books selection is ${fictionBook.name}, ${thrillerBook.name} and ${adventureBook.name}`
    }
}
library.addBooksToLibrary('fiction','The Star','Sabrine Raffad')
library.addBooksToLibrary('fiction','The War','Rashid Adili')
library.addBooksToLibrary('fiction','The Guitar','Siwar Adili')

library.addBooksToLibrary('thriller','Thriller1','Sabrine Raffad')
library.addBooksToLibrary('thriller','Thriller2','Rashid Adili')
library.addBooksToLibrary('thriller','Thriller3','Siwar Adili')

library.addBooksToLibrary('adventure','Adv1','Sabrine Raffad')
library.addBooksToLibrary('adventure','Adv2','Rashid Adili')
library.addBooksToLibrary('adventure','Adv3','Siwar Adili')


let bookList= library.generateBookLists()
console.log(bookList)