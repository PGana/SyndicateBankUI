import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatDividerModule,
  MatGridListModule,
  MatListModule,
  MatTooltipModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule 
} from '@angular/material';



@NgModule({
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatDividerModule, MatGridListModule, MatListModule,
    MatTooltipModule, MatSelectModule, MatDatepickerModule,  MatNativeDateModule ],
  exports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatDividerModule, MatGridListModule,
    MatListModule, MatTooltipModule, MatSelectModule, MatDatepickerModule],
    providers: [MatDatepickerModule]
})
export class AppMaterialsModule { }
