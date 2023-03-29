fdescribe('DependenciesComponent', () => {
    let component: DependenciesComponent;
    let fixture: ComponentFixture<DependenciesComponent>;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ DependenciesComponent, 
          MockComponent(ChildcomponentComponent),
          MockPipe(SquarePipe)
         ],
        imports:[ 
          HttpClientModule,
          MockModule(FormsModule),
          MockModule(ReactiveFormsModule) ],
      })
      .compileComponents();
  
      fixture = TestBed.createComponent(DependenciesComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });


    /*     await TestBed.configureTestingModule({
      declarations: [ DependenciesComponent, 
        MockComponent(ChildcomponentComponent),
        MockPipe(SquarePipe)
       ],
      imports:[ 
        HttpClientModule,
        MockModule(FormsModule),
        MockModule(ReactiveFormsModule) ],
    })
    .compileComponents(); */