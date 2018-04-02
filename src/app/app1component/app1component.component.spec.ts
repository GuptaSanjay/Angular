import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App1componentComponent } from './app1component.component';

describe('App1componentComponent', () => {
  let component: App1componentComponent;
  let fixture: ComponentFixture<App1componentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App1componentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App1componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
