import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TesteComponent implements OnInit {

  public count: number = 0;

  @Input() name: string;

  constructor(
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    setInterval(() => {
      this.count++;

      this.changeDetector.detectChanges();
    }, 1000);
  }

  runChangeDetection() {
    console.log('verificando a alteração de mudança');

    return true;
  }

}
