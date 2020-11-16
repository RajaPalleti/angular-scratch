import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-two-way-data',
  templateUrl: './two-way-data.component.html',
  styleUrls: ['./two-way-data.component.scss']
})
export class TwoWayDataComponent implements OnInit {
  @Input() size: any;
  @Output() sizeChange: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.size = 1;
  }
  onSizeChange() {
    this.size += 1;
    this.sizeChange.emit(this.size);
  }
}
