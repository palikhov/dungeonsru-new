# New DnD site for Russian DnD translators community prototype

This is a prototype (and possibly a working version) of the site for Russian DnD
translators community.

Based on Directus.io Headless CMS. Frontend based on Vue.js.

To build it you need to have Node.js and npm installed. Then run:

```bash
cd web
npm install
npm run build
```

Then copy `.env.template` file to `.env`, adjust settings and run:

```bash
docker-compose up -d --build
```
