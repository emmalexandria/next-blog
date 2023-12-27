import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: {type: 'string', required: true},
    tags: {type: 'list', of:{type:'string'}, required: false},
    image: {type: 'string', required: false},
    alt: {type: 'string', required: false},
    width: {type: 'number', required: false},
    height: {type: 'number', required:false},
    draft: {type: 'boolean', required: false}
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
  },
}))

export default makeSource({ contentDirPath: 'posts', documentTypes: [Post] })