// automatically import all posts in this folder
const req = require.context(".", false, /\.js$/);

// random ID generator
const genId = () => Math.floor(Math.random() * 1_000_000_000);

const posts = req
  .keys()
  .filter((key) => key !== "./index.js")
  .map((key) => {
    const post = req(key).default;

    return {
      ...post,
      id: post.id ?? genId(),   // only generate if post has no id
    };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export default posts;
