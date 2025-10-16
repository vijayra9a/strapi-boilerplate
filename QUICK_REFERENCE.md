# Strapi Boilerplate - Quick Reference

Quick commands and tips for daily development.

---

## 🚀 Most Used Commands

```bash
# Start development
npm run docker:build        # First time or after dependency changes
npm run docker:up           # Subsequent starts

# Stop development
npm run docker:down         # Stop containers
npm run docker:reset        # Complete reset (deletes data!)

# View logs and debug
npm run docker:logs         # View live logs
npm run docker:shell        # Access container shell

# Database
npm run db:migrate          # Run migrations
npm run db:seed             # Seed with sample data
```

---

## 🌐 Access URLs

| Service | URL | Credentials |
|---------|-----|-------------|
| Strapi Admin | http://localhost:1337/admin | Create on first visit |
| API | http://localhost:1337/api | - |
| Adminer (DB UI) | http://localhost:8080 | Server: `db`<br>User: `strapi`<br>Pass: `strapi`<br>DB: `strapi` |

---

## 📝 Environment Secrets

Generate secrets with:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Update these in `.env`:
- `APP_KEYS` (4 keys, comma-separated)
- `API_TOKEN_SALT`
- `ADMIN_JWT_SECRET`
- `TRANSFER_TOKEN_SALT`
- `JWT_SECRET`

---

## 🔧 Common Customizations

### Enable Redis
1. Uncomment `redis` service in `docker-compose.yml`
2. Add to `.env`:
   ```env
   REDIS_HOST=redis
   REDIS_PORT=6379
   ```
3. Run: `npm run docker:reset`

### Add Cloudinary
Update `.env`:
```env
UPLOAD_PROVIDER=cloudinary
CLOUDINARY_NAME=your-cloud-name
CLOUDINARY_KEY=your-api-key
CLOUDINARY_SECRET=your-api-secret
```

### Add Email Provider
Update `.env`:
```env
EMAIL_PROVIDER=sendgrid
EMAIL_PROVIDER_OPTIONS={"apiKey": "your-api-key"}
```

---

## 📦 Content Types

### Create New Content Type

**Option 1 - Admin Panel** (Recommended):
1. Go to Content-Type Builder
2. Click "Create new collection type"
3. Add fields as needed

**Option 2 - Manual**:
1. Create folder: `src/api/[name]/`
2. Add schema: `content-types/[name]/schema.json`
3. Add controller: `controllers/[name].ts`
4. Add routes: `routes/[name].ts`
5. Add service: `services/[name].ts`

---

## 🛡️ Security Checklist

Before deploying to production:

- [ ] Changed all default secrets in `.env`
- [ ] Using PostgreSQL (not SQLite)
- [ ] Enabled HTTPS/SSL
- [ ] Configured CORS for specific domains
- [ ] Set `NODE_ENV=production`
- [ ] Removed unused plugins
- [ ] Run `npm audit` and fix vulnerabilities
- [ ] Set up database backups
- [ ] Configure rate limiting
- [ ] Set up monitoring/logging

---

## 🐛 Troubleshooting

### Container won't start
```bash
npm run docker:logs  # Check error logs
npm run docker:reset # Nuclear option
```

### Database connection issues
```bash
# Check if database is running
docker ps

# Restart everything
npm run docker:reset
```

### Port already in use (Windows)
```powershell
# Find and kill process on port 1337
Get-Process -Id (Get-NetTCPConnection -LocalPort 1337).OwningProcess | Stop-Process
```

### Port already in use (macOS/Linux)
```bash
# Find process
lsof -i :1337

# Kill it
kill -9 <PID>
```

### Can't see uploaded files
Check volume mount in `docker-compose.yml`:
```yaml
volumes:
  - ./public/uploads:/opt/app/public/uploads
```

---

## 📊 Database Management

### Backup Database
```bash
docker exec strapi_db pg_dump -U strapi strapi > backup.sql
```

### Restore Database
```bash
docker exec -i strapi_db psql -U strapi strapi < backup.sql
```

### Connect to Database
```bash
docker exec -it strapi_db psql -U strapi -d strapi
```

---

## 🔌 API Examples

### Get All Pages
```bash
curl http://localhost:1337/api/pages
```

### Get Single Page
```bash
curl http://localhost:1337/api/pages/1
```

### Create Page (requires auth token)
```bash
curl -X POST http://localhost:1337/api/pages \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"data": {"title": "New Page", "content": "Content here"}}'
```

---

## 🎨 Customizing the Boilerplate

### Project-Specific Changes
1. Update `package.json` name and description
2. Customize content types in admin panel
3. Add your own components
4. Configure plugins as needed
5. Update README with project details

### Recommended Plugins
- `@strapi/plugin-seo` - Enhanced SEO features
- `@strapi/plugin-sitemap` - Auto-generate sitemaps
- `@strapi/plugin-graphql` - GraphQL support
- `@strapi/plugin-documentation` - API documentation

---

## 💡 Pro Tips

1. **Use Adminer**: Great for quick database inspection
2. **Watch Logs**: Run `docker:logs` in separate terminal
3. **Shell Access**: Use `docker:shell` for debugging
4. **TypeScript**: Run `npm run strapi ts:generate-types` after schema changes
5. **Git**: Commit early, commit often
6. **Secrets**: Never commit `.env` files

---

## 📚 Resources

- [Strapi Docs](https://docs.strapi.io/)
- [Docker Docs](https://docs.docker.com/)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)
- [Strapi Discord](https://discord.strapi.io/)
- [Strapi Forum](https://forum.strapi.io/)

---

**Need help?** Check the full README.md or IMPLEMENTATION_SUMMARY.md
