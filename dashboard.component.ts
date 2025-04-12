import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  users: any[] = [];
  role: string | null = '';
  loading = true;

  constructor(private authService: AuthService, private http: HttpClient) {}

  ngOnInit(): void {
    this.role = this.authService.getRole();
    this.http.get<any[]>('http://localhost:3000/api/users?delay=2000', this.authService.getAuthHeaders())
      .subscribe({
        next: (res) => {
          this.users = res;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
  }

  logout() {
    this.authService.logout();
    window.location.href = '/';
  }
}
