import { DEFAULT_SITE_TITLE, DEFAULT_META_DESCRIPTION, SITE_URL, SITE_TITLE, TWITTER_ID } from "@/constants"
import Head from "next/head"

type Props = {
  title?: string,
  url?: string,
  description?: string,
  type?: 'website' | 'article',
  imageUrl?: string,
}
export const Seo = ({ title, url, description, type = 'article', imageUrl }: Props) => {
  return (
    <Head>
      <title>{title ? `${title}｜${SITE_TITLE}` : DEFAULT_SITE_TITLE}</title>
      <meta name="description" content={description || DEFAULT_META_DESCRIPTION} key="description" />
      <meta property='og:title' content={title} key="og:title" />
      <meta property='og:url' content={url || SITE_URL} key="og:url" />
      <meta property='og:type' content={type} key="og:type" />
      <meta property='og:description' content={description || DEFAULT_META_DESCRIPTION} key="og:description" />
      <meta property='og:image' content={imageUrl || `${SITE_URL}/default-thumbnail.png`} key="og:image" />
      <meta property='og:image:width' content="800" key="og:image:width" />
      <meta property='og:image:height' content="800" key="og:image:height" />
      <meta property='og:site_name' content={SITE_TITLE} key="og:site_name" />
      <meta name='twitter:card' content='summary' key="twitter:card" />
      <meta name='twitter:site' content={`@${TWITTER_ID}`} key="twitter:site" />
      <meta name='twitter:creator' content={`@${TWITTER_ID}`} key="twitter:creator" />
      <link rel="canonical" href={url || SITE_URL} />
    </Head>
  )
}
