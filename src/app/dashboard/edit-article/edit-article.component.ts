import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/article';
import { DashboardService } from '../dashboard.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {
  article: Article = null;
  saved: boolean = false;

  constructor(private dashboardService: DashboardService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const key: string = params.key;
      this.getArticle(key);
    });
  }

  getArticle(key: string): void {
    this.dashboardService.getArticle(key).subscribe(
      (article: Article) => {
        if (article === null) {
          this.router.navigateByUrl('404');
          return;
        }
        this.article = article;
      }
    );
  }

  updateArticle(): void {
    this.saved = false;
    this.dashboardService.updateArticle(this.article).subscribe((article: Article) => {
      this.article = article;
      this.saved = true;
    })
  }

  viewPreview(): void {
    this.router.navigateByUrl("/dashboard/preview/" + this.article.key);
  }

}
