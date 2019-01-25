import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.css"]
})
export class QuestionsComponent implements OnInit {
  @Input() questions: string;

  @Input() questionLength: number;
  private answers: any = {};
  private submit = () => {
    console.log("Answers" + JSON.stringify(this.answers));
  };
  ngOnInit() {}
}
