import { Link, routes } from '@redwoodjs/router'

const BlogPost: React.FunctionComponent = ({ post }) => (
  <article>
    <header>
      <h2>
        <Link to={routes.blogPost({ id: post.id })}>{post.title}</Link>
      </h2>
    </header>
    <div>{post.body}</div>
    <div>Posted at: {post.createdAt}</div>
  </article>
)

export default BlogPost
