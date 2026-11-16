export interface BlogAuthor {
  name: string;
  avatar: string;
  role?: string;
}

export interface BlogPost {
  id: string | number;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  category: string;
  author: BlogAuthor;
  publishedAt: string;
  readTime: string;
  tags?: string[];
}

export interface BlogCardProps {
  post: BlogPost;
}

export interface BlogsGridSectionProps {
  posts?: BlogPost[];
}

export interface BlogDetailProps {
  post: BlogPost;
  relatedPosts?: BlogPost[];
}
