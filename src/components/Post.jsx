
const colors = [
  'bg-yellow-200',
  'bg-green-300',
  'bg-blue-300',
  'bg-pink-300',
  'bg-purple-400'
];

export default function Post({ post, index }) {
const colorClass = colors[index % colors.length]; //rotate through colors


  return (
    <div data-testid="postNote" className={`postnote p-4 rounded-lg shadow-[4px_4px_0px_#d4a017] transform rotate-3 max-w-sm m-4 ${colorClass}`}>
      <h2 className="text-xl font-bold">{post.firstName} {post.lastName}</h2>
      <p className="text-sm">{post.content}</p>
    </div>
  );
}