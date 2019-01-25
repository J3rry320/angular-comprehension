import { Component, OnInit } from "@angular/core";
import Axios from "axios";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent implements OnInit {
  private isLoaded: boolean;
  protected cookieValue = "";
  private passage = "";
  private questions = "";
  private numberOfQuestions = [];
  private regex = /<\/?[^>]+(>|$)/g;
  constructor(private cookieService: CookieService) {}

  async ngOnInit() {
    this.cookieValue = await this.cookieService.get("UserID");
    const data = await Axios.get(
      "https://simulationapi.ur-nl.com/case_study/companies/58cba141ba169e0eab2657c9/company_case_studies/595c859eba169ec47e4f20d4/user_company_case_studies/595ce021ba169edb9c733e90?include[company_case_study][include]=questions",
      {
        headers: {
          Authorization: `Bearer ${this.cookieValue}`
        }
      }
    );
    const questions =
      data.data.user_company_case_study.company_case_study.questions;
    const pages = data.data.user_company_case_study.company_case_study.pages;
    pages.map(ele => (this.passage += ele.body));
    questions.map(ele => (this.questions += ele.body));
    const arr = [];
    questions.map((ele, ind: number) => {
      this.numberOfQuestions.push({
        question: ele.body.replace(this.regex, ""),
        propName: `question${ind}`,
        name: `question${ind}`
      });
    });
    console.log(this.numberOfQuestions);
    this.isLoaded = true;
  }
}
