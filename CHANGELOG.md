# Changelog

All notable changes to this Strapi boilerplate.

---

## [2.0.0] - 2025-10-16

### 🎉 Major Enhancement Release

This release transforms the basic Strapi setup into a production-ready, team-friendly boilerplate with comprehensive documentation and best practices.

### ✨ Added

#### Configuration & Setup
- **Comprehensive environment template** (`env.example`) with all common configurations
- **PostgreSQL as default database** (instead of SQLite) for better production readiness
- **Adminer database UI** included and enabled by default
- **Redis service** configured (commented, ready to enable)
- **Enhanced Docker Compose** with proper networking and volume persistence

#### Content & Components
- **Pre-built Page content type** with rich text, excerpt, and cover image
- **Comprehensive SEO component** with meta tags, Open Graph, and Twitter Cards
- **Meta Social component** for platform-specific social media optimization
- **Database seeding script** with sample data structure

#### Development Tools
- **Enhanced npm scripts** for Docker management (`docker:up`, `docker:down`, `docker:reset`, etc.)
- **Database management scripts** (`db:migrate`, `db:seed`)
- **Container access commands** for debugging (`docker:logs`, `docker:shell`)

#### Security & Middleware
- **Enhanced security middleware** with Content Security Policy
- **CDN support** pre-configured (Cloudinary, AWS S3, Google)
- **Proper CORS configuration** ready for customization

#### Documentation
- **Comprehensive README.md** with step-by-step guides
- **IMPLEMENTATION_SUMMARY.md** documenting all features
- **QUICK_REFERENCE.md** for daily development commands
- **NEW_PROJECT_CHECKLIST.md** for starting new projects
- **CHANGELOG.md** (this file) for tracking changes

### 🔄 Changed

- **Database**: Changed from SQLite to PostgreSQL as default
- **Package.json**: Replaced `better-sqlite3` with `pg` driver
- **Docker Compose**: Enabled PostgreSQL and Adminer by default
- **Middlewares**: Enhanced security configuration with CSP
- **README**: Complete rewrite with comprehensive documentation
- **Engine requirements**: Made more flexible for newer Node.js versions

### 🐛 Fixed

- **Windows compatibility**: Removed `better-sqlite3` which requires native compilation
- **Docker persistence**: Added proper volume mounts for uploads and database

### 📚 Documentation Improvements

- Added detailed quick start guide
- Added troubleshooting section
- Added deployment instructions
- Added security checklist
- Added API endpoint documentation
- Added customization guides

---

## [1.0.0] - Initial Release

### Added

- Basic Strapi v5 setup
- Docker and Docker Compose configuration
- SQLite database (default)
- Basic npm scripts
- Simple README

---

## Upgrade Guide

### From 1.0.0 to 2.0.0

If you're upgrading an existing project:

1. **Backup your data** before proceeding
2. **Update `package.json`**:
   - Add new npm scripts
   - Replace `better-sqlite3` with `pg`
3. **Update `docker-compose.yml`**:
   - Add PostgreSQL service
   - Add Adminer service
   - Update volume mounts
4. **Create new `.env`** based on `env.example`
5. **Migrate database** from SQLite to PostgreSQL (if needed)
6. **Update middlewares** with new security configuration
7. **Review new content types** and components

**Note**: This is a major version change. For new projects, start fresh with version 2.0.0.

---

## Versioning

This project follows [Semantic Versioning](https://semver.org/):
- **Major version** (X.0.0): Breaking changes
- **Minor version** (0.X.0): New features, backward compatible
- **Patch version** (0.0.X): Bug fixes, backward compatible

---

## Contributing

When contributing, please:
1. Update this CHANGELOG with your changes
2. Follow the existing format
3. Categorize changes appropriately (Added, Changed, Fixed, etc.)
4. Include the date and version number

---

## Links

- [GitHub Repository](https://github.com/vijayra9a/strapi-boilerplate)
- [Issues](https://github.com/vijayra9a/strapi-boilerplate/issues)
- [Strapi Documentation](https://docs.strapi.io/)
