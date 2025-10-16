# New Project Setup Checklist

Use this checklist when creating a new project from this boilerplate.

---

## Initial Setup

### 1. Clone and Initialize Repository
```bash
# Clone the boilerplate
git clone https://github.com/vijayra9a/strapi-boilerplate.git my-new-project
cd my-new-project

# Remove existing git history
Remove-Item -Recurse -Force .git  # Windows PowerShell
# rm -rf .git                      # macOS/Linux

# Initialize fresh repository
git init
git add .
git commit -m "Initial commit from Strapi boilerplate"

# Add your remote
git remote add origin <your-repository-url>
git push -u origin main
```

- [ ] Repository cloned
- [ ] Git history removed
- [ ] Fresh git initialized
- [ ] Remote repository added

---

### 2. Update Project Information

**Edit `package.json`:**
```json
{
  "name": "your-project-name",
  "version": "1.0.0",
  "description": "Your project description",
  ...
}
```

- [ ] Project name updated
- [ ] Version set
- [ ] Description updated

---

### 3. Environment Configuration

**Copy environment template:**
```bash
Copy-Item env.example .env  # Windows
# cp env.example .env        # macOS/Linux
```

**Generate secrets (run 4 times):**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

**Update `.env` file:**
- [ ] `APP_KEYS` (4 keys, comma-separated)
- [ ] `API_TOKEN_SALT`
- [ ] `ADMIN_JWT_SECRET`
- [ ] `TRANSFER_TOKEN_SALT`
- [ ] `JWT_SECRET`
- [ ] Database credentials (if changed)
- [ ] Other project-specific variables

---

### 4. Customize Configuration (Optional)

**If using different database name/credentials:**
- [ ] Update `.env` database settings
- [ ] Update `docker-compose.yml` environment variables

**If enabling Redis:**
- [ ] Uncomment Redis service in `docker-compose.yml`
- [ ] Add Redis config to `.env`

**If using cloud storage (Cloudinary/S3):**
- [ ] Add provider config to `.env`
- [ ] Test upload functionality

**If using email provider:**
- [ ] Add email config to `.env`
- [ ] Test email functionality

---

### 5. Start Development Environment

```bash
# Build and start containers
npm run docker:build

# Wait for containers to be ready (check logs)
npm run docker:logs
```

**Access points:**
- [ ] Strapi admin accessible: http://localhost:1337/admin
- [ ] Adminer accessible: http://localhost:8080
- [ ] No error logs in console

---

### 6. Initial Strapi Configuration

**Create admin account:**
- [ ] Access http://localhost:1337/admin
- [ ] Create first administrator account
- [ ] Save credentials securely

**Review content types:**
- [ ] Check existing Page content type
- [ ] Review SEO components
- [ ] Decide if modifications needed

---

### 7. Customize Content Model

**Add/modify content types as needed:**
- [ ] Remove unused content types
- [ ] Create project-specific content types
- [ ] Configure relationships
- [ ] Set up permissions

**Common content types to consider:**
- [ ] Blog posts
- [ ] Products
- [ ] Categories/Tags
- [ ] Authors
- [ ] Navigation menus
- [ ] Global settings

---

### 8. Configure Plugins

**Install additional plugins if needed:**
```bash
npm run docker:shell
npm install @strapi/plugin-seo
# Or other plugins
exit
npm run docker:reset
```

- [ ] SEO plugin (if enhanced features needed)
- [ ] GraphQL (if needed)
- [ ] Documentation (if needed)
- [ ] Other project-specific plugins

---

### 9. Set Up API Permissions

**In Strapi Admin:**
1. Go to Settings > Roles > Public
2. Configure which content types are publicly accessible
3. Set up authenticated user permissions

- [ ] Public role configured
- [ ] Authenticated role configured
- [ ] API tokens created (if needed)

---

### 10. Update Documentation

**Update `README.md` with:**
- [ ] Project-specific information
- [ ] Custom content types documentation
- [ ] API endpoints documentation
- [ ] Team-specific setup instructions
- [ ] Deployment information

**Create additional docs:**
- [ ] API usage examples
- [ ] Content management guide
- [ ] Contribution guidelines

---

### 11. Development Workflow Setup

**Configure Git:**
- [ ] Review `.gitignore`
- [ ] Set up branch protection rules
- [ ] Configure CI/CD (if applicable)

**Team setup:**
- [ ] Share environment setup guide
- [ ] Document local development process
- [ ] Set up code review process

---

### 12. Security Review

**Before going to production:**
- [ ] All secrets changed from defaults
- [ ] CORS configured for specific domains
- [ ] Rate limiting configured
- [ ] SQL injection protection verified
- [ ] File upload restrictions set
- [ ] User permissions reviewed
- [ ] Admin panel protected
- [ ] HTTPS/SSL configured

---

### 13. Testing

**Test core functionality:**
- [ ] Create content via admin panel
- [ ] Fetch content via API
- [ ] Upload files/images
- [ ] User authentication works
- [ ] Permissions work correctly
- [ ] SEO meta tags generated correctly

**Load testing (if needed):**
- [ ] API performance tested
- [ ] Database queries optimized
- [ ] Caching configured

---

### 14. Deployment Preparation

**Choose deployment platform:**
- [ ] Railway
- [ ] DigitalOcean
- [ ] AWS
- [ ] Heroku
- [ ] Render
- [ ] Other: __________

**Prepare for deployment:**
- [ ] Production environment variables prepared
- [ ] Database backup strategy defined
- [ ] Monitoring set up
- [ ] Logging configured
- [ ] CDN configured (if needed)
- [ ] Domain configured

---

### 15. Post-Deployment

**After deploying:**
- [ ] Production site accessible
- [ ] Admin panel accessible
- [ ] Database connected
- [ ] Uploads working
- [ ] Email working (if configured)
- [ ] Monitoring active
- [ ] Backups scheduled

**Final steps:**
- [ ] Create production admin account
- [ ] Import/migrate content (if needed)
- [ ] Test all critical functionality
- [ ] Update DNS records
- [ ] Enable SSL certificate

---

## Quick Command Reference

```bash
# Development
npm run docker:build    # Build and start
npm run docker:up       # Start existing containers
npm run docker:down     # Stop containers
npm run docker:reset    # Complete reset
npm run docker:logs     # View logs
npm run docker:shell    # Access container

# Database
npm run db:migrate      # Run migrations
npm run db:seed         # Seed data

# Production build
npm run build          # Build admin panel
npm run start          # Start production server
```

---

## Need Help?

- [ ] Check `README.md` for detailed documentation
- [ ] Check `QUICK_REFERENCE.md` for common commands
- [ ] Check `IMPLEMENTATION_SUMMARY.md` for feature overview
- [ ] Visit [Strapi Documentation](https://docs.strapi.io/)
- [ ] Ask on [Strapi Discord](https://discord.strapi.io/)

---

**Checklist Complete!** 🎉

Your project is ready for development. Happy coding!
