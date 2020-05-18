import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-component-a',
  template: `
    <p>
      component-a works!
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentAComponent implements OnInit {
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.sharedService('comp A');
  }
}
