npx create-react-blog
=====================

Create a blog with **[create-react-app](https://facebook.github.io/create-react-app/)**, **[MDX](https://mdxjs.com)**, and **[Navi](https://frontarm.com/navi/)**.<br />
Themed after Gatsby's blog starter and Dan Abramov's [overreacted.io](https://overreacted.io).

**[See an example of the deployed app →](https://create-react-blog.netlify.com/)**

Comes with:

📡 RSS feed generation<br />
🏷️ Tagged posts<br />
🚀 HTML files for each URL<br />
📜 Smooth scrolling to hash links<br />
🔥 Animated page loading transition<br />
🔗 Easy code splitting with `import()`<br />
⏩ Paginated index page<br />
⛑ TypeScript support


Getting started
---------------

The simplest way to get started is to use `npx`:

```bash
npx create-react-blog react-blog
cd react-blog
npm start
```

If you'd like to use TypeScript, just pass in a `--typescript` option:

```bash
npx create-react-blog react-blog --typescript
```

Alternatively, you can clone this repository yourself and use one of the templates yourself. If you take this approach, make sure to also run `npm install`:

```bash
git clone git@github.com:frontarm/create-react-blog.git
mv create-react-blog/template react-blog
cd react-blog
npm install
npm start
```

To statically build your blog and then start a local server for testing:

```bash
npm run build
npm run serve
```

The quickest and easiet way to deploy your blog is with [Netlify](https://netlify.com/), which is already set up and ready to go:

```bash
# Deploy to a test URL
npm run deploy

# Deploy to a production URL
npm run deploy:prod
```

Of course, since your site is just a bunch of HTML files, it can be deployed anywhere you'd like. Here's a couple alternatives:

- [Deploying with ZEIT Now](https://zeit.co/docs/v2/deployments/basics/)
- [Surge.sh](https://surge.sh/)


How to...
---------

**To update the site's title,** edit the metadata in `src/siteMetadata.js`.

**To your bio and photo,** edit the Bio component in `src/components/Bio.js`.

**To change the site's colors,** edit the `:root` block in `src/index.module.css`.

**To create a new post,** add a new directory to `src/routes/posts` that is prefixed with the new post's publication date, then create a `post.js` file inside it:

```jsx
export default {
  title: `Learn How To Build This Blog From Scratch`,
  tags: ['react', 'navi'],
  spoiler: "An online course with loads of live demos and exercises.",
  getContent: () => import('./document.mdx'),
}
```

**To set the maximum number of posts on an index page,**, set the `indexPageSize` property of the object exported by `src/siteMetadata.js`.

**To modify the generated HTML,** update the `src/renderPageToString.js` file.

**To add non-blog pages,** just use [`Navi.createPage()`](https://frontarm.com/navi/reference/declarations/#createpage), [`Navi.createSwitch()`](https://frontarm.com/navi/reference/declarations/#createswitch) and [`Navi.createRedirect()`](https://frontarm.com/navi/reference/declarations/#createredirect). For an example, check the about page at [src/routes/about/index.js](template/src/routes/about/index.js). If you create a page, remember to add it to the root switch at [src/routes/index.js](template/src/routes/index.js).

**To brush up on React's fundamentals,** check out the [React (without the buzzwords)](https://frontarm.com/courses/learn-raw-react/) and [Asynchronous JavaScript](https://frontarm.com/courses/async-javascript/) courses.
