import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MessagePage2Component } from './message-page2.component';

describe('MessagePage2Component', () => {
  let component: MessagePage2Component;
  let fixture: ComponentFixture<MessagePage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessagePage2Component],
      providers: [provideMockStore({})],
    })
      .compileComponents();

    fixture = TestBed.createComponent(MessagePage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
