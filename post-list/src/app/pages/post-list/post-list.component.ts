import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MockDataService } from '../../services/mock-data.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-list',
  imports: [CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',

})
export class PostListComponent implements OnInit {
 posts: Post[] = [];
  hasMore = true;

  constructor(private dataService: MockDataService, private router: Router) {}

  ngOnInit(): void {
    this.loadMore();
  }

  loadMore(): void {
    const { next, result } = this.dataService.getPosts();
    this.posts.push(...result);
    this.hasMore = next;
  }

  viewPost(id: number): void {
    this.router.navigate(['/post', id]);
  }
}
