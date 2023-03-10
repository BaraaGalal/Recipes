import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() dataSelecter = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  onSelect(select: string) {
      this.dataSelecter.emit(select)
  }
}
