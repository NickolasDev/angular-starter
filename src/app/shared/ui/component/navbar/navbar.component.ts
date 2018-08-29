import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable, Subscription} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

export type NavOptions = Array<{
  id?: any,
  label: string,
  action?: (current: NavOptions) => void,
  routerLink?: Array<string>,
  icon: string,
  children?: NavOptions
}>;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  @Input() navOptions: NavOptions;
  pageTitles: Array<string> = [];
  subscription: Subscription;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
  }

  ngOnInit(): void {
    this.extractPageTitle(this.router.routerState.root);
    this.subscription = this.router.events.pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        this.extractPageTitle(this.router.routerState.root);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private extractPageTitle(activatedRoute: ActivatedRoute) {
    const pageTitle = activatedRoute.data;
    // TODO obter o título da página
  }


}
