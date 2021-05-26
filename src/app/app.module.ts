import { NgModule, OnInit,Input } from '@angular/core';
import { AppComponent } from './components/principal/app.component';
import { PopupComponent } from './components/popup/popup.component';
import { ApiService } from './app.service';
import { FilteruniquePipe } from './pipe/filterunique.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { InfoComponent } from './components/info/info.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    InfoComponent,
    FilteruniquePipe,
    FilterPipe,
    HeaderComponent,
    BodyComponent,
    NotfoundComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports:[
   
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
    


