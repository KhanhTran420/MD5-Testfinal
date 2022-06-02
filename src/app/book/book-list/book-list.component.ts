import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';
import {Book} from '../../model/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  bookLength: number;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.bookService.getAll().subscribe(books => {
      this.bookLength = books.length;
      this.books = books;
    });
  }

}
