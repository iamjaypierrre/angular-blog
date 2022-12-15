import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

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
  private id:string | null ="0"

  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = (value.get("id"))
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id.toString() == id)[0]


    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover

  }

}
