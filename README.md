# Wordpress Post React Renderer

---

There are plenty of 'Headless CMS' wordpress static site generators out there already, but I thought it would be fun to write one as an exercise without following any tutorials. I threw together this one, and another one using MaterialUI, with varying degrees of success.

On this one, the content retrieval from Wordpress REST API interface is implemented, but only from the `posts` portion of the WP site. It saves the retrieved object to `localStorage` (in your browser).

I'm not really planning to go any further with this particular project, but will surely use the concepts for future projects. One I'm currently working on is a backend that retrieves wordpress data for storage in mongodb, either as a site backup method, or for rendering by other means (or both).
