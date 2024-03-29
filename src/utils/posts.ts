import type { MarkdownInstance } from "astro"

interface Post {
  title: string
  slug: string
  href: string
  content: MarkdownInstance<any>["Content"]
  description: string | null
  date: Date
  tags: string[]
}

const postImports: Record<string, ResolveMarkdownImport> = import.meta.glob(
  "../posts/*.md",
)

// From https://byby.dev/js-slugify-string
function slugify(title: string) {
  return title
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
}

type ResolveMarkdownImport = () => Promise<
  MarkdownInstance<{
    title: string
    slug: string
    description: string
    date: string
    tags: string[]
  }>
>

async function resolveMarkdownImportEntry([relativePath, resolveImport]: [
  string,
  ResolveMarkdownImport,
]): Promise<Post> {
  const fileName = relativePath.split("/").at(-1) ?? null
  if (!fileName) {
    throw new Error(`Failed to extract file name from path: ${relativePath}`)
  }

  const markdown = await resolveImport()
  const slug = markdown.frontmatter.slug ?? slugify(markdown.frontmatter.title)

  const tags = markdown.frontmatter.tags

  return {
    title: markdown.frontmatter.title,
    slug,
    href: `/${slug}`,
    content: markdown.Content,
    description: markdown.frontmatter.description,
    date: new Date(markdown.frontmatter.date.replaceAll("-", "/")),
    tags,
  } as const
}

export async function getPosts() {
  const posts = await Promise.all(
    Object.entries(postImports).map(resolveMarkdownImportEntry),
  )
  return posts.sort((a, b) => {
    return b.date.getTime() - a.date.getTime()
  })
}
