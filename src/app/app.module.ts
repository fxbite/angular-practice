import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import {ReactiveFormsModule} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { TabMenuModule } from 'primeng/tabmenu';
import { ListboxModule } from 'primeng/listbox';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { PaginatorModule } from 'primeng/paginator';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';
import { SidebarModule } from 'primeng/sidebar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { TableComponent } from './components/table/table.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { EmailComponent } from './components/email/email.component';
import { SpotifyComponent } from './components/spotify/spotify.component';
import { UiComponentComponent } from './components/ui-component/ui-component.component';
import { PhoneFormatPipe } from './pipe/phone-format.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BannerComponent } from './components/dashboard/components/banner/banner.component';
import { SidebarContactComponent } from './components/email/components/sidebar-contact/sidebar-contact.component';
import { SidebarMessagesComponent } from './components/email/components/sidebar-messages/sidebar-messages.component';
import { SectionContactComponent } from './components/email/components/section-contact/section-contact.component';
import { SectionMessageComponent } from './components/email/components/section-message/section-message.component';
import { DetailMessageComponent } from './components/email/components/detail-message/detail-message.component';
import { ArtistResultComponent } from './components/spotify/components/artist-result/artist-result.component';
import { ArtistTopTrackComponent } from './components/spotify/components/artist-top-track/artist-top-track.component';

import { CookieService } from 'ngx-cookie-service';
import { NumberCommasPipe } from './pipe/number-commas.pipe';
import { SpotifyInterceptorProvider} from './interceptor/spotify.interceptor';
import { VideoComponent } from './components/ui-component/components/video/video.component';
import { SafePipe } from './pipe/safe.pipe'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RecipesComponent,
    BasicFormComponent,
    TableComponent,
    ToDoComponent,
    EmailComponent,
    SpotifyComponent,
    UiComponentComponent,
    PhoneFormatPipe,
    BannerComponent,
    SidebarContactComponent,
    SidebarMessagesComponent,
    SectionContactComponent,
    SectionMessageComponent,
    DetailMessageComponent,
    ArtistResultComponent,
    ArtistTopTrackComponent,
    NumberCommasPipe,
    VideoComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    ButtonModule,
    HttpClientModule,
    TableModule,
    ToastModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    DropdownModule,
    NgxChartsModule,
    TabMenuModule,
    ListboxModule,
    CardModule,
    RatingModule,
    PaginatorModule,
    DialogModule,
    TooltipModule,
    CalendarModule,
    SidebarModule,
  ],
  providers: [
    CookieService,
    SpotifyInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
