import { Component, inject, OnInit, signal } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-recursos',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './recursos.component.html',
  styleUrl: './recursos.component.css'
})
export default class RecursosComponent implements OnInit {


  public categoria = signal<string>('');
  private router = inject(ActivatedRoute);
  ngOnInit(): void {

    const categoria = this.router.snapshot.params['categoria'];
    this.categoria.set(categoria);
  }

}
