import { Component, Input, OnInit } from "@angular/core";
@Component({
  selector: "app-passage",
  templateUrl: "./passage.component.html",
  styleUrls: ["./passage.component.css"]
})
export class PassageComponent implements OnInit {
  @Input() pageData: string;

  ngOnInit() {}

}
