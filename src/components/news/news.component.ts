import { Component, OnInit } from '@angular/core';
import { INews } from 'src/types/news.model';
import { NewsService } from 'src/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(private newsService: NewsService) { }

  allNews: INews[] = [];
  indexCurrentsArticle: number;
  error: any;

  ngOnInit(): void {
    this.newsService.getNews().subscribe(
      data => {
        let articles = data.articles;
        articles.forEach((item, index) => {
          this.allNews.push(item);
        });
      },
      err => {
        this.error = err.message;
        alert(err);
      }
    );
  }

}
