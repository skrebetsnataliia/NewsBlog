import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import * as env from 'src/environments/environment';
import { INews } from 'src/types/news.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private  NEWS_URL = env.environment.API_NEWS_URL;
  constructor(private http: HttpClient) {

  }

  getNews(): Observable<{status: string, totalResults: number, articles: INews[]}> {
    return this.http.get<{status: string, totalResults: number, articles: INews[]}>(`${this.NEWS_URL}`).pipe(
      catchError(err => {
          return throwError(err);
        }
      )
    );
  }
}
