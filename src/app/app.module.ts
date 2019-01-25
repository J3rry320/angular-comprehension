import { NgReduxModule } from "@angular-redux/store";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { CookieService } from "ngx-cookie-service";
import { NgxSpinnerModule } from "ngx-spinner";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthComponent } from "./auth/auth.component";
import { ParentComponent } from "./parent/parent.component";
import { PassageComponent } from "./passage/passage.component";
import { QuestionsComponent } from "./questions/questions.component";
import { FormsModule } from "@angular/forms";
import { SanitizeHTMLPipe } from './sanitize-html.pipe';
@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    PassageComponent,
    AuthComponent,
    ParentComponent,
    SanitizeHTMLPipe
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    NgxSpinnerModule,
    ClarityModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
