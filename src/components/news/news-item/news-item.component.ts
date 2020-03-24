import { Component, OnInit, Input } from '@angular/core';
import { INews } from 'src/types/news.model';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  constructor() { }

  @Input()news: INews;
  ngOnInit(): void {
  }

}
