import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { CovalentLayoutModule } from "@covalent/core/layout";
import { CovalentCommonModule } from "@covalent/core/common";
import { CovalentMediaModule } from "@covalent/core/media";
import { CovalentLoadingModule } from "@covalent/core/loading";

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatDividerModule } from "@angular/material/divider";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";

import { AppComponent } from "./app.component";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        // covalent modules
        CovalentCommonModule,
        CovalentLayoutModule,
        CovalentLoadingModule,
        CovalentMediaModule,
        // material modules
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatDividerModule,
        MatInputModule,
        MatToolbarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
