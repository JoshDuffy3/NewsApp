import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_URL = environment.NEWS_URL;
const API_KEY = environment.NEWS_API_KEY;


interface ApiResponse {
  status: string;
  totalResults: number;
  articles: any[];
  }

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  articles: any[] = [];

  constructor(private httpClient: HttpClient) {}

  ionViewDidEnter() {
    this.loadData();
  }

  loadData() {
    const url = `${API_URL}category=sports&country=ie&apiKey=${API_KEY}`;
    this.httpClient.get<ApiResponse>(url).subscribe((results) => {
      this.articles = results.articles;
      console.log(this.articles);
    });
  }
}
