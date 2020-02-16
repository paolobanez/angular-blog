import { Injectable, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../article';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getHeaders(): HttpHeaders {
    let token: string;
    if (typeof localStorage !== undefined) {
      token = localStorage.token;
    }

    const headers: HttpHeaders = new HttpHeaders({
      Authorization: token
    });

    return headers;
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(environment.apiUrl + "/api/dashboard/overview", { headers: this.getHeaders() });
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

  deleteArticle(id: number): Observable<any> {
    return this.http.delete<any>(environment.apiUrl + "/api/dashboard/article/" + id);
  }

  createArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(environment.apiUrl + "/api/dashboard/article", article);
  }
}
