import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-placeholder',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './placeholder.html',
  styleUrls: ['./placeholder.css']
})
export class PlaceholderComponent implements OnInit {
  title = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.title = this.route.snapshot.data['title'] || 'Page';
  }
}