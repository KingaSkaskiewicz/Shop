import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KontaktComponent } from '../components/kontakt/kontakt.component';
import { OnasComponent } from '../components/onas/onas.component';
import { WysylkaComponent } from '../components/wysylka/wysylka.component';
import { ProduktyComponent } from '../components/produkty/produkty.component';
import { KoszykComponent } from '../components/koszyk/koszyk.component';
import { MainComponent } from '../components/main/main.component';
import { AdminNewslettersComponent } from '../components/admin-newsletters/admin-newsletters.component';
import { RealizacjaComponent } from '../components/realizacja/realizacja.component';


const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'onas', component: OnasComponent },
  { path: 'wysylka', component: WysylkaComponent },
  { path: 'produkty', component: ProduktyComponent },
  { path: 'koszyk', component: KoszykComponent },
  { path: 'adminNewsletters', component: AdminNewslettersComponent },
  { path: 'realizacja', component: RealizacjaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
