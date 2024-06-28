import { Component, Inject, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit{
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  mensagem: string =  'Processando Dados';

  constructor(public dialogRef: MatDialogRef<LoadingComponent>, @Inject(MAT_DIALOG_DATA) public data: any,) {}

   ngOnInit(): void {
    
    this.mensagem = this.data;
    
  }

}
