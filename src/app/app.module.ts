/**
 * importación de módulos con objetos y utilidades comunes del framework y propios
/* importación del componente raíz, definido en esta misma carpeta
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { routedComponents, AppRoutingModule } from './app-rounting.module';
import { FooterComponent } from './layout/footer.component';
import { ContentComponent } from './layout/content.component';
import { NavbarComponent } from './layout/navbar/navbar.component';


// decorador que define un módulo
@NgModule({
  declarations: [ // cosas declaradas en este módulo
    AppComponent,
    NotFoundPageComponent,
    ...routedComponents,
    FooterComponent,
    ContentComponent,
    NavbarComponent,
  ],
  imports: [ // otros módulos que necesitamos para que este funcione
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent] // componente raíz para el arranque
})
/**
 * Módulo raiz de la aplicación
 * Destinado a importar la funcionalidad implentadas en otros módulos
 */
export class AppModule {
  // los módulos son clases contendoras
  // habitualmente con poco o ningún código
}
