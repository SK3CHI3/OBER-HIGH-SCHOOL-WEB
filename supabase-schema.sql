-- Ober Boys High School Database Schema
-- This file contains the SQL schema for the Supabase database

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create news_articles table
CREATE TABLE IF NOT EXISTS news_articles (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    excerpt TEXT,
    image_url TEXT,
    category VARCHAR(50) NOT NULL,
    author VARCHAR(100) NOT NULL,
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    featured BOOLEAN DEFAULT FALSE,
    status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
    views INTEGER DEFAULT 0
);

-- Create admin_users table
CREATE TABLE IF NOT EXISTS admin_users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    role VARCHAR(20) DEFAULT 'editor' CHECK (role IN ('admin', 'editor')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_login TIMESTAMP WITH TIME ZONE
);

-- Create school_events table
CREATE TABLE IF NOT EXISTS school_events (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    event_date TIMESTAMP WITH TIME ZONE NOT NULL,
    location VARCHAR(255),
    category VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'cancelled', 'completed'))
);

-- Create gallery_images table
CREATE TABLE IF NOT EXISTS gallery_images (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    image_url TEXT NOT NULL,
    category VARCHAR(50),
    uploaded_by UUID REFERENCES admin_users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    featured BOOLEAN DEFAULT FALSE
);

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    subject VARCHAR(255),
    message TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'replied')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_news_articles_status ON news_articles(status);
CREATE INDEX IF NOT EXISTS idx_news_articles_published_at ON news_articles(published_at);
CREATE INDEX IF NOT EXISTS idx_news_articles_category ON news_articles(category);
CREATE INDEX IF NOT EXISTS idx_news_articles_featured ON news_articles(featured);
CREATE INDEX IF NOT EXISTS idx_school_events_date ON school_events(event_date);
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON contact_messages(status);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_news_articles_updated_at 
    BEFORE UPDATE ON news_articles 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_school_events_updated_at 
    BEFORE UPDATE ON school_events 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert sample admin user (password should be hashed in production)
INSERT INTO admin_users (email, name, role) VALUES 
('admin@oberboyshigh.ac.ke', 'School Administrator', 'admin'),
('editor@oberboyshigh.ac.ke', 'Content Editor', 'editor')
ON CONFLICT (email) DO NOTHING;

-- Insert sample news articles
INSERT INTO news_articles (title, content, excerpt, image_url, category, author, published_at, featured, status) VALUES 
(
    'Ober Boys Wins National Science Olympiad Championship',
    'Our students secured first place in the National Science Olympiad with their groundbreaking renewable energy project, earning international recognition and a scholarship opportunity for the winning team. The project focused on developing a solar-powered water purification system that can provide clean drinking water to rural communities. This achievement highlights our commitment to STEM education and practical problem-solving.',
    'Our students secured first place in the National Science Olympiad with their groundbreaking renewable energy project...',
    'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'Achievement',
    'School Administration',
    NOW(),
    true,
    'published'
),
(
    'New STEM Innovation Center Opens',
    'The school inaugurated a cutting-edge STEM Innovation Center with advanced robotics, AI labs, and 3D printing facilities to prepare students for the future of technology and innovation. The center features state-of-the-art equipment and provides students with hands-on experience in emerging technologies.',
    'The school inaugurated a cutting-edge STEM Innovation Center with advanced robotics, AI labs...',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'Infrastructure',
    'Principal''s Office',
    NOW() - INTERVAL '5 days',
    true,
    'published'
);

-- Set up Row Level Security (RLS)
ALTER TABLE news_articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE school_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policies for news_articles
CREATE POLICY "Anyone can view published news articles" ON news_articles
    FOR SELECT USING (status = 'published');

CREATE POLICY "Admins can manage all news articles" ON news_articles
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM admin_users 
            WHERE id = auth.uid() 
            AND role = 'admin'
        )
    );

-- Create policies for admin_users
CREATE POLICY "Admins can view all users" ON admin_users
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM admin_users 
            WHERE id = auth.uid() 
            AND role = 'admin'
        )
    );

-- Create policies for contact_messages
CREATE POLICY "Anyone can insert contact messages" ON contact_messages
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view all contact messages" ON contact_messages
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM admin_users 
            WHERE id = auth.uid() 
            AND role IN ('admin', 'editor')
        )
    );

-- Create policies for school_events
CREATE POLICY "Anyone can view active events" ON school_events
    FOR SELECT USING (status = 'active');

CREATE POLICY "Admins can manage all events" ON school_events
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM admin_users 
            WHERE id = auth.uid() 
            AND role = 'admin'
        )
    );

-- Create policies for gallery_images
CREATE POLICY "Anyone can view gallery images" ON gallery_images
    FOR SELECT USING (true);

CREATE POLICY "Admins can manage gallery images" ON gallery_images
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM admin_users 
            WHERE id = auth.uid() 
            AND role IN ('admin', 'editor')
        )
    );
