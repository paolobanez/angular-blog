import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { SharedService } from "../shared.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  constructor(
    private titleService: Title,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(`About - ${this.sharedService.blogTitle}`)
  }
}
