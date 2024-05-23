import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { AIntroAreaComponent } from './aintro-area/aintro-area.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [    
    RouterOutlet,
    CommonModule,
    AIntroAreaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
