import { Component, OnInit } from "@angular/core";
import axios from "axios";
import { CookieService } from "ngx-cookie-service";
@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit {
  constructor(private cookieService: CookieService) {}
  async getUser() {
    const data = await axios.post(
      "https://simulationapi.ur-nl.com/oauth/token.json",
      null,
      {
        params: {
          auth_token: "azd4jXWWLagyb9KzgfDJ",
          client_id:
            "4874eafd0f7a240625e59b2b123a142a669923d5b0d31ae8743f6780a95187f5",
          client_secret:
            "908f6aee4d4cb27782ba55ae0c814bf43419f3220d696206212a29fe3a05cd88",
          grant_type: "password",
          scope: "user"
        }
      }
    );

    const tokenData = data.data;
    this.cookieService.set(
      "UserID",
      tokenData.access_token,
      tokenData.expires_in
    );
  }
  async ngOnInit() {
    this.cookieService.get("UserID")
      ? console.log("Found User")
      : this.getUser();
  }
}
