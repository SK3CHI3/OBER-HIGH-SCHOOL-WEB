import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// News article type
export interface NewsArticle {
  id: string
  title: string
  content: string
  excerpt: string
  image_url: string
  category: string
  author: string
  published_at: string
  created_at: string
  updated_at: string
  featured: boolean
  status: 'draft' | 'published' | 'archived'
}

// Admin user type
export interface AdminUser {
  id: string
  email: string
  name: string
  role: 'admin' | 'editor'
  created_at: string
}
