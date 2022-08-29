import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [NavbarComponent, LoaderComponent],
  imports: [CommonModule],
  exports: [NavbarComponent,LoaderComponent],
})
export class SharedModule {}
