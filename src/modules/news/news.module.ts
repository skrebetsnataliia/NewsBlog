import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from 'src/components/news/news.component';
import { RouterModule, Route } from '@angular/router';
import { NewsItemComponent } from 'src/components/news/news-item/news-item.component';
import { NewsService } from 'src/services/news.service';

const routes: Route[] = [
  {
    path: '',
    component: NewsComponent
  }
];

@NgModule({
  declarations: [NewsComponent, NewsItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [NewsService]
})
export class NewsModule { }
