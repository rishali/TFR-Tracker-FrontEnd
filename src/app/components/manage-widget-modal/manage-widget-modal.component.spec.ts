import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWidgetModalComponent } from './manage-widget-modal.component';

describe('ManageWidgetModalComponent', () => {
  let component: ManageWidgetModalComponent;
  let fixture: ComponentFixture<ManageWidgetModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageWidgetModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageWidgetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
