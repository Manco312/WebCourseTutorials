import type { Request, Response } from 'express';
import { books } from '../data/Books.js';
import { Book } from '../models/Book.js';

export class BookController {

  static index(req: Request, res: Response): void {
    const viewData: any = {};
    viewData["books"] = books;

    res.render('books/index', viewData);
  }

  static show(req: Request, res: Response): void {
    const book = Book.findById(books, parseInt(req.params.id as string));
    const viewData: any = {};
    viewData["book"] = book;

    res.render('books/show', viewData);
  }
}