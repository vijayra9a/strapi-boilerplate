# Strapi CMS Boilerplate

A production-ready **Strapi v5** boilerplate with Docker configuration, pre-built content types, SEO components, and development tools for rapid project initialization. Perfect for teams that need to quickly spin up new Strapi projects with best practices already configured.

---

## 🚀 What's Included

This boilerplate comes with everything you need to start building your CMS:

- ✅ **Strapi v5** with TypeScript support
- 🐳 **Docker & Docker Compose** configuration
- 🗄️ **PostgreSQL Database**: Production-ready database (Adminer UI included)
- 📄 **Pre-built Content Types**: Pages with rich text and SEO
- 🔍 **SEO Components**: Complete meta tags, Open Graph, Twitter Cards
- 🛠️ **Development Tools**: Database seeding scripts, useful npm commands
- 🔒 **Security**: Enhanced middleware with CSP configuration
- ☁️ **CDN Ready**: Pre-configured for Cloudinary, AWS S3, and other services
- 📊 **Optional Services**: Redis for caching
- 📝 **Comprehensive Configuration**: Full environment variable templates

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Docker & Docker Compose** - [Download here](https://www.docker.com/products/docker-desktop/)
- **Node.js** (v18 to v22) - for local development and running utility scripts
  - If you have a newer version (v23+), the boilerplate will still work in Docker
  - Local development may show engine warnings but should still function
- **Git** - for version control

> **💡 Tip**: This boilerplate is designed to run primarily in Docker, which handles all dependencies and avoids platform-specific compilation issues (like `better-sqlite3` on Windows).

---

## 🛠️ Quick Start

### 1. Create New Project from Boilerplate

```bash
# Clone the boilerplate repository
git clone https://github.com/vijayra9a/strapi-boilerplate.git my-new-project
cd my-new-project

# Remove existing git history and initialize fresh repository
Remove-Item -Recurse -Force .git  # Windows PowerShell
# rm -rf .git                      # macOS/Linux

git init
git add .
git commit -m "Initial commit from Strapi boilerplate"
```

### 2. Environment Setup

```bash
# Copy the environment template
Copy-Item env.example .env  # Windows PowerShell
# cp env.example .env        # macOS/Linux
```

**Generate secure secrets** by running this command **4 times** (once for each secret):

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Open `.env` and update the following values with your generated secrets:

- `JWT_SECRET`
- `ADMIN_JWT_SECRET`
- `TRANSFER_TOKEN_SALT`
- `API_TOKEN_SALT`
- `APP_KEYS` - Enter 4 different generated keys separated by commas

**Example:**
```env
APP_KEYS=key1here,key2here,key3here,key4here
API_TOKEN_SALT=your-generated-salt-here
ADMIN_JWT_SECRET=your-generated-secret-here
TRANSFER_TOKEN_SALT=your-generated-salt-here
JWT_SECRET=your-generated-secret-here
```

### 3. Start Development Environment

```bash
# Build and start all services
docker-compose up --build

# Or use the npm script
npm run docker:build
```

The first time you run this, it will take several minutes to download images and install dependencies. Subsequent starts will be much faster.

### 4. Access Your CMS

Once the containers are running, you can access:

- **Strapi Admin Panel**: http://localhost:1337/admin
- **API Endpoint**: http://localhost:1337/api
- **Adminer (Database UI)**: http://localhost:8080 (login: username `strapi`, password `strapi`, database `strapi`)
- **Documentation**: http://localhost:1337/documentation (if enabled)

On first access, you'll be prompted to create your administrator account.

---

## 📦 Available Scripts

Here are all the npm scripts available in this boilerplate:

### Development
```bash
npm run dev              # Start Strapi in development mode (local)
npm run develop          # Alias for dev
```

### Docker Commands
```bash
npm run docker:up        # Start containers (without rebuilding)
npm run docker:build     # Build and start containers
npm run docker:down      # Stop all containers
npm run docker:reset     # Complete reset (removes volumes and data)
npm run docker:logs      # View live container logs
npm run docker:shell     # Access container shell for debugging
```

### Database
```bash
npm run db:migrate       # Run database migrations
npm run db:seed          # Seed database with sample data
```

### Production
```bash
npm run build            # Build Strapi admin panel for production
npm run start            # Start Strapi in production mode
```

### Other
```bash
npm run console          # Open Strapi console
npm run strapi           # Run any Strapi CLI command
```

---

## 🏗️ Project Structure

```
strapi-boilerplate/
├── config/              # Strapi configuration files
│   ├── admin.ts        # Admin panel configuration
│   ├── api.ts          # API configuration
│   ├── database.ts     # Database configuration
│   ├── middlewares.ts  # Middleware configuration (CORS, Security, etc.)
│   ├── plugins.ts      # Plugin configuration
│   └── server.ts       # Server configuration
├── database/           # Database files (SQLite) and migrations
├── public/             # Public assets and uploads
│   └── uploads/        # User uploaded files
├── scripts/            # Utility scripts
│   └── seed.js         # Database seeding script
├── src/
│   ├── api/            # API definitions
│   │   └── page/       # Example: Page content type
│   ├── components/     # Reusable components
│   │   └── shared/     # Shared components (SEO, Meta Social)
│   ├── extensions/     # Plugin extensions
│   └── index.ts        # Entry point
├── types/              # TypeScript types
├── docker-compose.yml  # Docker services configuration
├── Dockerfile          # Docker image definition
├── env.example         # Environment variables template
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── README.md          # This file
```

---

## 🔧 Customization

### Using SQLite for Local Development (Optional)

By default, this boilerplate uses PostgreSQL which works seamlessly in Docker. If you want to use SQLite for local development outside Docker:

1. **Install SQLite dependency**:
   ```bash
   npm install better-sqlite3
   # Note: On Windows, this requires Visual Studio Build Tools
   ```

2. **Edit `.env`**: Update database configuration:
   ```env
   DATABASE_CLIENT=sqlite
   DATABASE_FILENAME=.tmp/data.db
   ```

3. **Run locally**:
   ```bash
   npm run dev
   ```

**Note**: SQLite requires native compilation on Windows which needs Visual Studio Build Tools. PostgreSQL in Docker avoids this requirement.

### Enabling Redis for Caching

1. **Edit `docker-compose.yml`**: Uncomment the `redis` service.

2. **Edit `.env`**: Add Redis configuration:
   ```env
   REDIS_HOST=redis
   REDIS_PORT=6379
   ```

3. **Restart containers**:
   ```bash
   npm run docker:reset
   ```

### Adding New Content Types

1. **Option 1 - Admin Panel** (Recommended):
   - Start your Strapi server
   - Go to Content-Type Builder in the admin panel
   - Create your content type with fields

2. **Option 2 - Manual**:
   - Create a new folder in `src/api/[content-type-name]/`
   - Add `content-types/[name]/schema.json`
   - Add controllers, services, and routes as needed

### Configuring File Uploads

#### Cloudinary
Update `.env`:
```env
UPLOAD_PROVIDER=cloudinary
CLOUDINARY_NAME=your-cloud-name
CLOUDINARY_KEY=your-api-key
CLOUDINARY_SECRET=your-api-secret
```

#### AWS S3
Update `.env`:
```env
UPLOAD_PROVIDER=aws-s3
AWS_ACCESS_KEY_ID=your-access-key
AWS_ACCESS_SECRET=your-secret-key
AWS_REGION=us-east-1
AWS_BUCKET=your-bucket-name
```

---

## 🎨 Pre-built Content Types

### Page Content Type

A flexible page content type included in this boilerplate:

**Fields:**
- `title` - Page title (string, required)
- `slug` - URL-friendly slug (uid, auto-generated from title)
- `content` - Rich text content (markdown/WYSIWYG)
- `excerpt` - Short description (text, max 500 chars)
- `coverImage` - Featured image (media)
- `seo` - SEO component (see below)

**API Endpoints:**
- `GET /api/pages` - List all pages
- `GET /api/pages/:id` - Get single page
- `POST /api/pages` - Create page (requires authentication)
- `PUT /api/pages/:id` - Update page (requires authentication)
- `DELETE /api/pages/:id` - Delete page (requires authentication)

### SEO Component

Comprehensive SEO configuration included with every page:

**Fields:**
- `metaTitle` - Page title for search engines (60 chars max)
- `metaDescription` - Meta description (160 chars max)
- `metaImage` - Social sharing image
- `keywords` - SEO keywords
- `metaRobots` - Robot directives (default: "index, follow")
- `canonicalURL` - Canonical URL
- `structuredData` - JSON-LD structured data
- `metaSocial` - Open Graph and Twitter Card data

---

## 🛡️ Security Considerations

### Development
- ✅ Default secrets are provided for quick setup
- ✅ CORS is enabled for localhost

### Production Checklist
- ⚠️ **CHANGE ALL DEFAULT SECRETS** in `.env`
- ⚠️ Use strong, unique values for all tokens
- ⚠️ Enable HTTPS/SSL
- ⚠️ Configure CORS for your specific frontend domains
- ⚠️ Use environment variables, never commit secrets
- ⚠️ Enable rate limiting in production
- ⚠️ Use PostgreSQL instead of SQLite
- ⚠️ Regular security updates: `npm audit` and `npm update`

---

## 🚀 Deployment

### Docker Production Deployment

1. **Create production environment file** (`.env.production`):
   ```env
   NODE_ENV=production
   DATABASE_CLIENT=postgres
   # ... other production values
   ```

2. **Build for production**:
   ```bash
   docker build -t my-strapi-app:latest .
   ```

3. **Run in production**:
   ```bash
   docker run -p 1337:1337 --env-file .env.production my-strapi-app:latest
   ```

### Platform-Specific Deployment

This boilerplate can be easily deployed to:

- **Railway**: Connect your git repository and set environment variables
- **DigitalOcean App Platform**: Use Docker deployment with your `Dockerfile`
- **AWS ECS/Fargate**: Deploy using Docker containers
- **Heroku**: Use the Heroku Postgres add-on
- **Render**: Deploy as a Docker service
- **Vercel/Netlify**: Deploy the admin panel as a static site

For detailed deployment guides, check the [Strapi deployment documentation](https://docs.strapi.io/dev-docs/deployment).

---

## 🆘 Troubleshooting

### Port Already in Use

**Problem**: Error message "port 1337 is already in use"

**Solution**:
```bash
# Stop all containers
npm run docker:down

# If port is still in use, find and kill the process
# Windows PowerShell:
Get-Process -Id (Get-NetTCPConnection -LocalPort 1337).OwningProcess | Stop-Process

# Or change the port in docker-compose.yml:
ports:
  - "3000:1337"  # Now accessible at localhost:3000
```

### Database Connection Issues

**Problem**: Cannot connect to database

**Solution**:
```bash
# Reset everything (WARNING: deletes all data)
npm run docker:reset

# Or check database logs
npm run docker:logs
```

### Permission Issues with Uploads

**Problem**: Cannot write to uploads directory

**Solution** (Linux/macOS):
```bash
sudo chown -R $USER:$USER ./public/uploads
chmod -R 755 ./public/uploads
```

### Container Won't Start

**Problem**: Container exits immediately

**Solution**:
```bash
# Check logs for errors
npm run docker:logs

# Ensure .env file exists with required variables
# Try rebuilding from scratch
npm run docker:reset
```

### TypeScript Errors

**Problem**: TypeScript compilation errors

**Solution**:
```bash
# Regenerate TypeScript types
npm run strapi ts:generate-types

# Or disable TypeScript checking temporarily
# Add to tsconfig.json: "skipLibCheck": true
```

---

## 📚 Additional Resources

- [Strapi Documentation](https://docs.strapi.io/)
- [Strapi Community Forum](https://forum.strapi.io/)
- [Strapi Discord](https://discord.strapi.io/)
- [Docker Documentation](https://docs.docker.com/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this boilerplate:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🙋 Support

If you encounter any issues or have questions:

1. Check the [Troubleshooting](#-troubleshooting) section above
2. Search [existing issues](https://github.com/vijayra9a/strapi-boilerplate/issues)
3. Create a [new issue](https://github.com/vijayra9a/strapi-boilerplate/issues/new) with details
4. Join the [Strapi Discord](https://discord.strapi.io/) community

---

**Happy coding! 🚀**
