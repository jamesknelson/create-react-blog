import React from 'react'
import ArticleSummary from './ArticleSummary'
import styles from './TagPage.module.css'
import { Route } from 'navi'

interface TagPageProps {
  blogPathname: string
  name: string
  routes: Route[]
}

function TagPage({ blogPathname, name, routes }: TagPageProps) {
  return (
    <div className={styles.TagPage}>
      <h1>{name} posts</h1>
      <ul>
        {routes.map(route => (
          <li key={route.url.href}>
            <ArticleSummary blogPathname={blogPathname} route={route} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TagPage
