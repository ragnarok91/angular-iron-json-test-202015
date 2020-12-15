import { Component,OnInit } from '@angular/core';
import { DataService } from './data.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  constructor(
    private dataService:DataService
  ){}
  newHero = { name: '漩渦鳴人', age: 15 }
  heros

  ngOnInit() {
   //this.heros = this.dataService.getData()
   this.dataService.getData().subscribe(res => {
      console.log(res) //可以打開console看看資料室什麼
      this.heros = res.data
   })
  }
  getNewHeroFromAnotherComponent(newHero){
    console.log('app component')
    console.log(newHero)
    this.heros.push(newHero)
  }
}
