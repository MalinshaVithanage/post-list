import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Comment } from '../models/comment.model';
import data from '../../assets/data.json';

@Injectable({ providedIn: 'root' })
export class MockDataService {
  private posts: Post[] = data.posts;
  private comments: Comment[] = data.comments;
  private currentIndex = 0;

  getPosts(): { next: boolean; result: Post[] } {
    const slice = this.posts.slice(this.currentIndex, this.currentIndex + 10);
    this.currentIndex += 10;
    return { next: this.currentIndex < this.posts.length, result: slice };
  }

  getPost(id: number): Post {
    return this.posts.find(p => p.id === id)!;
  }

  getComments(postId: number): Comment[] {
    return this.comments.filter(c => c.postId === postId);
  }
}
