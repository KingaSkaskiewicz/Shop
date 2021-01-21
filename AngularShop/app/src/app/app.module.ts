import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './components/app/app.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';
import { OnasComponent } from './components/onas/onas.component';
import { WysylkaComponent } from './components/wysylka/wysylka.component';
import { ProduktyComponent } from './components/produkty/produkty.component';
import { ProductDetailsModalComponent } from './components/produkty/product-details-modal/product-details-modal.component';
import { KoszykComponent } from './components/koszyk/koszyk.component';
import { MainComponent } from './components/main/main.component';
import { ProduktyService } from './services/produkty/produkty.service';
import { ShoppingBasketService } from './services/shopping-basket/shopping-basket.service';
import { UserService } from './services/user/user.service';
import { RealizacjaComponent } from './components/realizacja/realizacja.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { AdminNewslettersComponent } from './components/admin-newsletters/admin-newsletters.component';


@NgModule({
  declarations: [
    AppComponent,
    KontaktComponent,
    OnasComponent,
    WysylkaComponent,
    ProduktyComponent,
    ProductDetailsModalComponent,
    KoszykComponent,
    MainComponent,
    RealizacjaComponent,
    AdminNewslettersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRadioModule,
    NgbDropdownModule
    
  ],
  providers: [ProduktyService, ShoppingBasketService, UserService],
  bootstrap: [AppComponent],
  entryComponents: [ProductDetailsModalComponent]
})
export class AppModule { }
