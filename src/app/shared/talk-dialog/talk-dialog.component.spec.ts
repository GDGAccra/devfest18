import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkDialogComponent } from './talk-dialog.component';

describe('TalkDialogComponent', () => {
  let component: TalkDialogComponent;
  let fixture: ComponentFixture<TalkDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
