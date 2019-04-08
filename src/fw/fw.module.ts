import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { ContentComponent } from './content/content.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { ScreenBelowLarge } from './directives/screen-below-large.directive';
import { ScreenLarge } from './directives/screen-large.directive';
import { MenuComponent } from './menus/menu/menu.component';
import { MenuItemComponent } from './menus/menu-item/menu-item.component';
import { RouterModule } from '@angular/router';
import { PopupMenuComponent } from './menus/popup-menu/popup-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './users/sign-in/sign-in.component';
import { RegisterUserComponent } from './users/register-user/register-user.component';
import { DynamicFormComponent } from './dynamic-forms/dynamic-form/dynamic-form.component';
import { DynamicFieldComponent } from './dynamic-forms/dynamic-field/dynamic-field.component';
import { PanelComponent } from './panels/panel/panel.component';


@NgModule({
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent,
    StatusBarComponent,
    ScreenBelowLarge,
    ScreenLarge,
    MenuComponent,
    MenuItemComponent,
    PopupMenuComponent,
    SignInComponent,
    RegisterUserComponent,
    DynamicFormComponent,
    DynamicFieldComponent,
    PanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FrameworkBodyComponent,
    DynamicFormComponent,
    PanelComponent,
    ScreenLarge,
    ScreenBelowLarge
  ]
})
export class FwModule { }
