import { crawl, resolve } from 'navi'
import {SitemapStream, EnumChangefreq, streamToPromise} from "sitemap";
import {writeFileSync} from "fs";

async function renderSitemapToString({ routes }) {
  let publicURL = process.env.PUBLIC_URL || '/'
  let { paths } = await crawl({
    routes,
    root: '/',
  })
  const sitemap = new SitemapStream( { hostname: publicURL } )

  for (let pathname of paths.sort()) {
    if ((pathname === `/about`) || (pathname.startsWith(`/posts`))) {
      const route = await resolve({
        routes,
        url: pathname,
      })

      sitemap.write({
        url: pathname,
        changefreq: EnumChangefreq.DAILY,
        priority: 0.3
      })
    }
  }
  sitemap.end()

  // Readable.from is available on node ^12.3.0 and netlify deployments break with ^11.15.0
  // https://github.com/nodejs/node/issues/28693
  // https://github.com/frontarm/navi/issues/92

  writeFileSync(
      "public/sitemap.xml",
      await streamToPromise(sitemap).then(buffer => buffer.toString())
  )

}

export default renderSitemapToString