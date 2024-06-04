import { ArticleApi } from '@/app/api/article-api'

export default async function ArticleDeatailPage(p: { params: { title: string } }) {
  const article = await ArticleApi.fetchByTitle(p.params.title)
  const header = <></>
  const body = <></>
  const footer = <></>

  return (
    <>
      {JSON.stringify(article)}
      {header} {body} {footer}
    </>
  )
}
