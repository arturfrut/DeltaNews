import { defineConfig } from 'tinacms'

const branch = 'main'

const clientId = process.env.CLIENT_ID ?? process.env.NEXT_PUBLIC_TINA_CLIENT_ID
const token = process.env.TOKEN ?? process.env.TINA_TOKEN

export default defineConfig({
	branch: branch,
	clientId,
	token, 

	build: {
		outputFolder: 'admin',
		publicFolder: 'public'
	},
	media: {
		tina: {
			mediaRoot: '/src/assets/images',
			publicFolder: ''
		}
	},
	schema: {
		collections: [
			{
				name: 'post',
				label: 'Blog Post',
				path: 'src/content/blog',
				format: 'mdx',
				fields: [
					{
						type: 'image',
						label: 'Cover Image',
						required: true,
						name: 'heroImage',
						description: 'The image used for the cover of the post'
					},

					{
						type: 'string',
						label: 'description',
						required: true,
						name: 'description',
						description: 'A short description of the post'
					},
					{
						type: 'datetime',
						name: 'pubDate',
						label: 'Publication Date',
						required: true
					},
					{
						name: 'draft',
						label: 'Draft',
						type: 'boolean',
						description: 'If this is checked the post will not be published'
					},
					{
						type: 'string',
						name: 'tags',
						required: false,
						label: 'Tags',
						description: 'Tags for this post',
						list: true,
						ui: {
							component: 'tags'
						}
					},
					{
						type: 'string',
						name: 'title',
						label: 'Title',
						isTitle: true,
						required: true
					},
					{
						type: 'rich-text',
						label: 'Body',
						name: 'SButton',
						isBody: true,
						templates: [
							// Custom Components
							{
								label: 'SButton',
								name: 'SButton',
								fields: [
									{
										type: 'rich-text',
										label: 'SButton',
										name: 'children',
										isBody: true
									}
								]
							}
						]
					}
				]
			}
		]
	}
})
