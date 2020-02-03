import { Component, ViewChild } from "@angular/core";
import { SwalComponent } from "@sweetalert2/ngx-sweetalert2";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "pdf-viewer";
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  @ViewChild("showInfoSwal", null) private showInfoSwal: SwalComponent;

  openInfo() {
    console.log("ga");

    // this.showInfoSwal.show();
  }
}
