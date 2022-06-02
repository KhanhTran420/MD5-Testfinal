import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Book} from '../../model/book';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {
  books: Book = {};
  constructor(private bookService: BookService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.bookView(id);
    });
  }
  ngOnInit() {
  }

  bookView(id: number) {
    this.bookService.findById(id).subscribe((books) => {
      this.books = books;
    });
  }
}
