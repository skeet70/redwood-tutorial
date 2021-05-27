import BlogPost from 'src/components/BlogPost'

export const QUERY = gql`
  query BlogPostQuery($id: String!) {
    post(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ post }) => {
  return (
    <div>
      <BlogPost post={post} />
    </div>
  )
}
