import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../components/principal/app.component';
import { InfoComponent } from '../components/info/info.component';
import { BodyComponent } from '../components/body/body.component';
import { PopupComponent } from '../components/popup/popup.component';
import { NotfoundComponent } from '../components/notfound/notfound.component';

const rutas: Routes = [
  { path: '', component: BodyComponent, pathMatch:'full'},
  { path: 'edit/:id', component: PopupComponent},
  { path: 'posts/:id', component: InfoComponent, pathMatch:'full'},
  { path: '404/', component: NotfoundComponent},
  { path: '**', redirectTo: '404/'}
];

// const rutas: Routes = [
//   {
//       path: '', component: BodyComponent, 
//       children: [
//         { path: 'edit/:id', component: PopupComponent},
//         { path: 'posts/:id', component: InfoComponent},
//         { path: '404/', component: NotfoundComponent},
//         { path: '**', redirectTo: '404/'}
//       ]
//   }
// ];

export const routing = RouterModule.forRoot(rutas);
