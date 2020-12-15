import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //匯入HttpClient模組

@Injectable({ providedIn: 'root',})
export class DataService {
  /*
  heros = [
    { name: '兩斤勘吉', age: 35 },
    { name: '秋本麗子', age: 25 },
    { name: '野比大雄', age: 12 },
    { name: '江戶川柯南', age: 8 }
  ];*/
 constructor(
    private http: HttpClient //將HttpClient注入
  ) { }
  getData() {
    const httpOptions = {
      headers: new HttpHeaders({ 'secret-key': '$2b$10$WwqX.02qchXGVG/hhiNyTu3caiRdObjIZcMFdFr4G1bwm9vEZMNN.' })
    }; //自己架的API需要的header，可以略過不看
    const url='https://api.jsonbin.io/b/5d8cc016ef78a919ccb52682/3'
    return this.http.get(url,httpOptions) //使用get方法取得資料
  }
}