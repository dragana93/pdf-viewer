import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// import { SweetAlert2Module } from "node_modules/sweetalert2";
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { PdfViewerModule } from "ng2-pdf-viewer";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot(),
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
