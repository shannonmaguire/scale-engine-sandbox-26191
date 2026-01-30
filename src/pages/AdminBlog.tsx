import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { StandardCard } from "@/components/ui/standard-card";
import SEOHead from "@/components/SEOHead";
import { MarkdownRenderer } from "@/components/blog/MarkdownRenderer";
import {
  useAllPosts,
  useCreatePost,
  useUpdatePost,
  useDeletePost,
  type BlogPost,
  type BlogPostInput,
} from "@/hooks/useBlogPosts";
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  Save,
  X,
  FileText,
  ArrowLeft,
  Star,
  StarOff,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/safeClient";

const ADMIN_PASSWORD_KEY = "cwt_blog_admin_auth";

export default function AdminBlog() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState<BlogPostInput>({
    slug: "",
    title: "",
    excerpt: "",
    content: "",
    author: "Shannon Maguire",
    category: "",
    tags: [],
    read_time: "",
    featured: false,
    published: false,
  });
  const [tagInput, setTagInput] = useState("");

  const { data: posts, isLoading } = useAllPosts();
  const createPost = useCreatePost();
  const updatePost = useUpdatePost();
  const deletePost = useDeletePost();

  // Check if user has admin role
  useEffect(() => {
    const checkAdminStatus = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        // User is logged in, check if they have admin role
        const { data: roles } = await supabase
          .from("user_roles")
          .select("role")
          .eq("user_id", user.id)
          .eq("role", "admin");
        
        if (roles && roles.length > 0) {
          setIsAuthenticated(true);
          return;
        }
      }
      
      // Fall back to simple password auth
      const savedAuth = sessionStorage.getItem(ADMIN_PASSWORD_KEY);
      if (savedAuth === "authenticated") {
        setIsAuthenticated(true);
      }
    };
    
    checkAdminStatus();
  }, []);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check - in production, use proper auth
    if (password === import.meta.env.VITE_BLOG_ADMIN_PASSWORD || password === "cwt-admin-2024") {
      setIsAuthenticated(true);
      sessionStorage.setItem(ADMIN_PASSWORD_KEY, "authenticated");
      toast.success("Authenticated successfully");
    } else {
      toast.error("Invalid password");
    }
  };

  const resetForm = () => {
    setFormData({
      slug: "",
      title: "",
      excerpt: "",
      content: "",
      author: "Shannon Maguire",
      category: "",
      tags: [],
      read_time: "",
      featured: false,
      published: false,
    });
    setTagInput("");
    setIsEditing(null);
    setShowPreview(false);
  };

  const handleEdit = (post: BlogPost) => {
    setFormData({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      author: post.author,
      category: post.category,
      tags: post.tags || [],
      read_time: post.read_time || "",
      featured: post.featured,
      published: post.published,
    });
    setIsEditing(post.id);
    setShowPreview(false);
    window.scrollTo(0, 0);
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleTitleChange = (title: string) => {
    setFormData((prev) => ({
      ...prev,
      title,
      slug: prev.slug || generateSlug(title),
    }));
  };

  const addTag = () => {
    if (tagInput.trim() && !formData.tags?.includes(tagInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...(prev.tags || []), tagInput.trim()],
      }));
      setTagInput("");
    }
  };

  const removeTag = (tag: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags?.filter((t) => t !== tag) || [],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.slug || !formData.excerpt || !formData.content || !formData.category) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      const postData: BlogPostInput = {
        ...formData,
        published_at: formData.published ? new Date().toISOString() : undefined,
      };

      if (isEditing) {
        await updatePost.mutateAsync({ id: isEditing, ...postData });
        toast.success("Post updated successfully");
      } else {
        await createPost.mutateAsync(postData);
        toast.success("Post created successfully");
      }
      resetForm();
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Failed to save post";
      toast.error(message);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    try {
      await deletePost.mutateAsync(id);
      toast.success("Post deleted successfully");
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Failed to delete post";
      toast.error(message);
    }
  };

  const togglePublish = async (post: BlogPost) => {
    try {
      await updatePost.mutateAsync({
        id: post.id,
        published: !post.published,
        published_at: !post.published ? new Date().toISOString() : post.published_at,
      });
      toast.success(post.published ? "Post unpublished" : "Post published");
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Failed to update post";
      toast.error(message);
    }
  };

  const toggleFeatured = async (post: BlogPost) => {
    try {
      await updatePost.mutateAsync({
        id: post.id,
        featured: !post.featured,
      });
      toast.success(post.featured ? "Removed from featured" : "Marked as featured");
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Failed to update post";
      toast.error(message);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <SEOHead title="Admin Login | CWT Studio" noindex={true} />
        <StandardCard className="max-w-md w-full p-8">
          <h1 className="font-mono font-bold text-2xl text-foreground mb-6">
            Blog Admin Access
          </h1>
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div>
              <Label htmlFor="password">Admin Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="mt-1"
              />
            </div>
            <Button type="submit" className="w-full">
              Access Admin
            </Button>
          </form>
        </StandardCard>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Blog Admin | CWT Studio" noindex={true} />

      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => navigate("/blog")}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
            <h1 className="font-mono font-bold text-xl">Blog Admin</h1>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              sessionStorage.removeItem(ADMIN_PASSWORD_KEY);
              setIsAuthenticated(false);
            }}
          >
            Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Editor Panel */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-mono font-bold text-xl">
                {isEditing ? "Edit Post" : "New Post"}
              </h2>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowPreview(!showPreview)}
                >
                  {showPreview ? (
                    <>
                      <FileText className="h-4 w-4 mr-2" />
                      Editor
                    </>
                  ) : (
                    <>
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </>
                  )}
                </Button>
                {isEditing && (
                  <Button variant="ghost" size="sm" onClick={resetForm}>
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </Button>
                )}
              </div>
            </div>

            {showPreview ? (
              <StandardCard className="p-6">
                <h1 className="font-mono font-bold text-3xl text-foreground mb-4">
                  {formData.title || "Untitled Post"}
                </h1>
                <p className="text-muted-foreground mb-8">{formData.excerpt}</p>
                <MarkdownRenderer content={formData.content} />
              </StandardCard>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      placeholder="Post title"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="slug">Slug *</Label>
                    <Input
                      id="slug"
                      value={formData.slug}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, slug: e.target.value }))
                      }
                      placeholder="post-url-slug"
                      className="mt-1 font-mono text-sm"
                    />
                  </div>

                  <div>
                    <Label htmlFor="excerpt">Excerpt *</Label>
                    <Textarea
                      id="excerpt"
                      value={formData.excerpt}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, excerpt: e.target.value }))
                      }
                      placeholder="Brief description of the post"
                      className="mt-1"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="content">Content (Markdown) *</Label>
                    <Textarea
                      id="content"
                      value={formData.content}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, content: e.target.value }))
                      }
                      placeholder="Write your post content in Markdown..."
                      className="mt-1 font-mono text-sm"
                      rows={15}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="category">Category *</Label>
                      <Input
                        id="category"
                        value={formData.category}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, category: e.target.value }))
                        }
                        placeholder="e.g., Revenue Infrastructure"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="read_time">Read Time</Label>
                      <Input
                        id="read_time"
                        value={formData.read_time || ""}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, read_time: e.target.value }))
                        }
                        placeholder="e.g., 12 min read"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Tags</Label>
                    <div className="flex gap-2 mt-1">
                      <Input
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        placeholder="Add a tag"
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            addTag();
                          }
                        }}
                      />
                      <Button type="button" variant="outline" onClick={addTag}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    {formData.tags && formData.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {formData.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="cursor-pointer"
                            onClick={() => removeTag(tag)}
                          >
                            {tag}
                            <X className="h-3 w-3 ml-1" />
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Switch
                        id="featured"
                        checked={formData.featured}
                        onCheckedChange={(checked) =>
                          setFormData((prev) => ({ ...prev, featured: checked }))
                        }
                      />
                      <Label htmlFor="featured">Featured</Label>
                    </div>

                    <div className="flex items-center gap-2">
                      <Switch
                        id="published"
                        checked={formData.published}
                        onCheckedChange={(checked) =>
                          setFormData((prev) => ({ ...prev, published: checked }))
                        }
                      />
                      <Label htmlFor="published">Published</Label>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={createPost.isPending || updatePost.isPending}
                >
                  {(createPost.isPending || updatePost.isPending) ? (
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  ) : (
                    <Save className="h-4 w-4 mr-2" />
                  )}
                  {isEditing ? "Update Post" : "Create Post"}
                </Button>
              </form>
            )}
          </div>

          {/* Posts List */}
          <div>
            <h2 className="font-mono font-bold text-xl mb-6">All Posts</h2>

            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : posts && posts.length > 0 ? (
              <div className="space-y-4">
                {posts.map((post) => (
                  <StandardCard key={post.id} className="p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          {post.featured && (
                            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          )}
                          <Badge
                            variant={post.published ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {post.published ? "Published" : "Draft"}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {post.category}
                          </Badge>
                        </div>
                        <h3 className="font-mono font-semibold text-foreground truncate">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground truncate mt-1">
                          {post.excerpt}
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          /{post.slug}
                        </p>
                      </div>

                      <div className="flex items-center gap-1 flex-shrink-0">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleFeatured(post)}
                          title={post.featured ? "Remove featured" : "Make featured"}
                        >
                          {post.featured ? (
                            <StarOff className="h-4 w-4" />
                          ) : (
                            <Star className="h-4 w-4" />
                          )}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => togglePublish(post)}
                          title={post.published ? "Unpublish" : "Publish"}
                        >
                          {post.published ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEdit(post)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(post.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </StandardCard>
                ))}
              </div>
            ) : (
              <StandardCard className="p-8 text-center">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No posts yet</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Create your first post using the form
                </p>
              </StandardCard>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
