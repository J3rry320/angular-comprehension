import { Component, OnInit } from "@angular/core";
import { Questions } from "../app";
import axios from "axios";
import { ConstantPool } from "@angular/compiler";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.css"]
})
export class QuestionsComponent implements OnInit {
  questions: Partial<Questions> = {
    title: undefined,
    userID: undefined,
    id: undefined,
    completed: undefined
  };
  cookieValue = "";
  constructor(private cookieService: CookieService) {}

  async ngOnInit() {
    this.questions = {
      title: "Hey"
    };
    this.cookieValue = await this.cookieService.get("UserID");
    const data = await axios.get(
      "https://simulationapi.ur-nl.com/case_study/companies/58cba141ba169e0eab2657c9/company_case_studies/595c859eba169ec47e4f20d4/user_company_case_studies/595ce021ba169edb9c733e90?include[company_case_study][include]=questions",
      {
        headers: {
          Authorization: `Bearer ${this.cookieValue}`
        }
      }
    );
    console.log(data.data.user_company_case_study.company_case_study);
  }
}
