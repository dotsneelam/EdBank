
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatSidenavModule,
  MatNavList,
  MatGridList,
  MatGridTile,
  MatDivider,
  MatList,
  MatTableModule,
  MatDialogModule,
  MatToolbarModule,
  MatStepperModule,
  MatTabsModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatTooltipModule,
} from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidenavComponent,
    MatNavList,
    MatGridList,
    MatGridTile,
    MatDivider,
    MatList,
  ],
  imports: [
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
     FlexLayoutModule,
     MatButtonModule,
     MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatStepperModule,
    MatTabsModule,
    HttpClientModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatTableModule,
    MatDialogModule,
    MatTooltipModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
