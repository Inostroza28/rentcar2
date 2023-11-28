import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage implements OnInit {
  fields = [
    {
      name: 'Toyota 101',
      address: 'Los angeles 24',
      phone: '+569 2487 5962',
      image: '',
      price: 15000,
      rating: 4
    },
    {
      name: 'Peugeot 301',
      address: 'La cisterna 41',
      phone: '+569 6324 8217',
      image: '',
      price: 15000,
      rating: 4
    },
    {
      name: 'Honda civic',
      address: 'La florida 322',
      phone: '+569 3578 7441',
      image: '',
      price: 15000,
      rating: 5
    },
  ]



  constructor() { }

  ngOnInit() {
  }
}
