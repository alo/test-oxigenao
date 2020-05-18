import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-component-c',
  template: `
    <p>
      component-c works!
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentCComponent implements OnInit {
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.sharedService('comp C');
  }
}
