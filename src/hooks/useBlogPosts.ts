import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/safeClient";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  read_time: string | null;
  featured: boolean;
  published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface BlogPostInput {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author?: string;
  category: string;
  tags?: string[];
  read_time?: string;
  featured?: boolean;
  published?: boolean;
  published_at?: string;
}

// Fetch all published blog posts (public)
export function usePublishedPosts() {
  return useQuery({
    queryKey: ["blog-posts", "published"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("published", true)
        .order("published_at", { ascending: false });

      if (error) throw error;
      return data as BlogPost[];
    },
  });
}

// Fetch a single post by slug (public)
export function usePostBySlug(slug: string | undefined) {
  return useQuery({
    queryKey: ["blog-posts", "slug", slug],
    queryFn: async () => {
      if (!slug) return null;
      
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .maybeSingle();

      if (error) throw error;
      return data as BlogPost | null;
    },
    enabled: !!slug,
  });
}

// Fetch all posts including drafts (admin only)
export function useAllPosts() {
  return useQuery({
    queryKey: ["blog-posts", "all"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as BlogPost[];
    },
  });
}

// Create a new blog post
export function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (post: BlogPostInput) => {
      const { data, error } = await supabase
        .from("blog_posts")
        .insert([post])
        .select()
        .single();

      if (error) throw error;
      return data as BlogPost;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog-posts"] });
    },
  });
}

// Update an existing blog post
export function useUpdatePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, ...updates }: Partial<BlogPost> & { id: string }) => {
      const { data, error } = await supabase
        .from("blog_posts")
        .update(updates)
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;
      return data as BlogPost;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog-posts"] });
    },
  });
}

// Delete a blog post
export function useDeletePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from("blog_posts")
        .delete()
        .eq("id", id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog-posts"] });
    },
  });
}
