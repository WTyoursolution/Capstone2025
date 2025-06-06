export default function Post({ post }) {

  return (
    <div data-testid="postNote" className="postnote p-4 rounded-lg shadow-[4px_4px_0px_#d4a017] transform rotate-3 max-w-sm m-4">
      <h2 className="text-xl font-bold">{post.firstName} {post.lastName}</h2>
      <p className="text-sm">{post.content}</p>
    </div>
  );
}