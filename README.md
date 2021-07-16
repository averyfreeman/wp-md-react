# Wordpress Post Re-Renderer

---

There are plenty of 'Headless CMS' static and dynamic site generators out there already, but I thought this would be a fun project to throw together as an exercise

Currently the content retrieval from Wordpress REST API interface is implemented, but only from the `posts` portion of the WP site. It saves the retrieved object to `localStorage` (in your browser).

This project was a precursor to a newer rendition I created that works much better (I tired of bootstrap and wanted to incorporate a new UI framework into a WP post retrieval app - this project has been since abandoned).

About the repo name: I had originally wanted to render markdown files (which I'd done in a previous project ages ago), but after I started I realized the limitations of React make local file retrieval really difficult, so if I ever decide to implement the markdown rendering functionality, I'll migrate the newer project to NextJS.

I'm working on yet another project that has more potential - a backend site that retrieves wordpress data and stores it in a mongodb database written using fastify, either as an alternative site backup method, or a way to off-site data for use in other projects (e.g. re-render using a site like this one). It's called `wp-mfer`: Wordpress MongoDB Fastify Extracter
