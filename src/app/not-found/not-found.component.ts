import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { SharedService } from "../shared.service";

@Component({
  selector: "app-not-found",
  templateUrl: "./not-found.component.html",
  styleUrls: ["./not-found.component.scss"]
})
export class NotFoundComponent implements OnInit {
  constructor(
    private titleService: Title,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(`${this.sharedService.blogTitle}`)
  }
}
