import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferableViewComponent } from './deferable-view.component';

describe('DeferableViewComponent', () => {
  let component: DeferableViewComponent;
  let fixture: ComponentFixture<DeferableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferableViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
