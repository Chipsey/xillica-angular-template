import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SidebarGuardService {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const sidebarRequired = route.data['sidebar'];
    if (!sidebarRequired) {
      // If sidebar is not required, prevent navigation to the route
      console.log('Sidebar not required for this route');
      return false;
    }
    // Sidebar is required, allow navigation to the route
    return true;
  }
}
