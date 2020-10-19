import { AfterContentChecked, AfterContentInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked {
  public productBrand: string;
  public productModel: string;
  public productPrice: number;
  public showProduct: boolean;
  public birdsList: Array<string> = [];
  public selectedBird = 'bird';
  constructor() { }

  ngOnInit() {
    this.productBrand = 'Samsung';
    this.productModel = 'edwe3323';
    this.productPrice = 20000;
    this.showProduct = false;
    this.birdsList = [
      'bird', 'bird1', 'bird2', 'bird3', 'bird4', 'bird5'
    ];
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
    console.log('onchanges showProduct', this.showProduct);
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit', this.showProduct);
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked', this.showProduct);
  }
  // onChange() {
  //   console.log('showProduct', this.showProduct);
  // }
}
