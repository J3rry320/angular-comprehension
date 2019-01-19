import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { QuestionsComponent } from "./questions/questions.component";
import { PassageComponent } from "./passage/passage.component";
import { AuthComponent } from "./auth/auth.component";
import { CookieService } from "ngx-cookie-service";

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    PassageComponent,
    AuthComponent
  ],
  imports: [BrowserModule],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
