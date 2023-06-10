function Book(title, author, pages, readBool){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readBool = readBool;

    if (readBool === true) {
        this.read = "have read.";
    } else {
        this.read = "have not read yet.";
    }

    this.info = title + " by " + author + ", " + pages + " pages, " + this.read;
}