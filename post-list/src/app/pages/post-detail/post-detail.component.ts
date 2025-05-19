import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockDataService } from '../../services/mock-data.service';
import { Post } from '../../models/post.model';
import { Comment } from '../../models/comment.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  imports: [CommonModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent implements OnInit {
  
post!: Post;
  comments: Comment[] = [];

  constructor(private route: ActivatedRoute, private dataService: MockDataService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.dataService.getPost(id);
    this.comments = this.dataService.getComments(id);
  }
}
