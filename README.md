# post-list

# Tech Stack:
• Angular

# Features :
# Post List
• Display posts in a card layout

• Responsive:

o Desktop: 5 cards per row

o Tablet: 2 cards per row

o Mobile: 1 card per row

• Each card shows title and truncated body

• Include a “Load More” button to load 10 posts at a time

• Keep loading until no more posts are available

# Post Details

• Clicking on a card opens a detailed view

• Display full post content

• Display associated comments

• Layout:

o Desktop: details and comments side-by-side

o Tablet/Mobile: stacked vertically

# API Simulation Methods

• getPosts(): { next: boolean, result: Post[] }

o Returns 10 posts per call

o next = true if more posts are available

• getPost(id: number): Post

• getComments(postId: number): Comment[]

