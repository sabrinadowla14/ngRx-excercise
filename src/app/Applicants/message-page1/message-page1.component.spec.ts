import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MessagePage1Component } from './message-page1.component';

describe('MessagePage1Component', () => {
  let component: MessagePage1Component;
  let fixture: ComponentFixture<MessagePage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessagePage1Component],
      providers: [provideMockStore({})],
    })
      .compileComponents();

    fixture = TestBed.createComponent(MessagePage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
