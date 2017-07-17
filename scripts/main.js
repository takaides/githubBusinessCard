let body = document.querySelector("body");

let request = new XMLHttpRequest();
request.addEventListener("load", githubcard);
request.open('GET', 'https://api.github.com/users/takaides');
request.send();

function githubcard() {
  // Parse our response text
  let data = JSON.parse(this.responseText);
  console.log(data);
  let webBody = `<header>
    <h1>${data.name}</h1>
  </header>
  <main>
    <section>
      <div class="basics">
        <h2>The Basics</h2>
        <ul>
          <li>Name: ${data.name}</li>
          <li>GitHub URL: ${data.html_url}</li>
          <li>Email: ${data.email}</li>
          <li>Company: ${data.company}</li>
          <li>Website: ${data.blog}</li>
        </ul>
      </div>
      <div class="story">
        <h2>The Story</h2>
        <p>${data.bio}</p>
      </div>
      <div class="photo">
        <img src=${data.avatar_url} alt="A photo of ${data.name}.">
      </div>
    </section>
  </main>`;
  body.innerHTML = webBody;
}
