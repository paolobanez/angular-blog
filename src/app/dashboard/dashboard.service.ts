import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../article';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(environment.apiUrl + "/api/dashboard/overview");
  }

  getArticle(key: string): Observable<Article> {
    return this.http.get<Article>(environment.apiUrl + "/api/dashboard/article/" + key);
  }

  togglePublishState(article: Article): Observable<Article> {
    return this.http.post<Article>(environment.apiUrl + "/api/dashboard/article/publish", article);
  }

  updateArticle(article: Article): Observable<Article> {
    return this.http.put<Article>(environment.apiUrl + '/api/dashboard/article', article);
  }
}
