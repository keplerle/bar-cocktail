import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeModule } from './recipe/recipe.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HttpClientModule,
    RecipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
