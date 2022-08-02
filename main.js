let postApi = "https://jsonplaceholder.typicode.com/posts";

fetch(postApi)
  .then(function (response) {
    return response.json();
    // JSON.parse : JSON => javascript types
  })
  .then(function (posts) {
    const htmls = posts.map(function (post) {
      return `
      <div class="item">
        <div class="id">userId:${post.id}</div>
        <div class="title">Title: ${post.title}</div>
        <div class="body">${post.body}</div>
      </div>
      `;
    });
    let html = htmls.join("");
    document.querySelector(".post").innerHTML = html;
  });
