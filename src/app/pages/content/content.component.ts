import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit  {

  @Input()
  photoCover:string="https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1209%2Fr1104359_1296x729_16%2D9.jpg&w=570&format=jpg"
  @Input()
  contentTitle:string="MINHA NOTICIA"
  @Input()
  contentDescription:string="LASJDLAKSJDL"

  constructor(){}

  ngOnInit(): void {

  }

}
