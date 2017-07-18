let body = document.querySelector("body");

// Create http request
let request = new XMLHttpRequest();
request.addEventListener("load", githubcard);
request.open('GET', 'https://api.github.com/users/takaides');
request.send();

function githubcard() {
  // Parse the response text
  let data = JSON.parse(this.responseText);
  // Fix bio if none
  if (data.bio === null) {
    data.bio = "Bacon ipsum dolor amet biltong capicola hamburger turkey landjaeger, pancetta swine frankfurter pork loin cow chicken short ribs alcatra. Short loin tri-tip porchetta pork loin cupim, flank ground round pancetta doner. Kielbasa shankle turkey doner tongue ground round, filet mignon fatback ham hock spare ribs sausage andouille. Ground round burgdoggen bacon pork loin, frankfurter alcatra tenderloin shankle rump andouille jowl bresaola sirloin tri-tip shank.";
  }
  // fix email if none
  if (data.email === null) {
    data.email = "foo@bar.com"
  }
  // console log for safety
  console.log(data);
  // create web content
  let webBody = `<header>
    <h1>${data.name}</h1>
  </header>
  <main>
    <section>
      <div id="basics">
        <h2>The Basics</h2>
        <ul>
          <li><label>Name:</label> ${data.name}</li>
          <li><label>GitHub URL:</label> <a href=${data.html_url}>${data.login}</a></li>
          <li><label>Email:</label> ${data.email}</li>
          <li><label>Company:</label> ${data.company}</li>
          <li><label>Website:</label> <a href=${data.blog}>${data.blog}</a></li>
        </ul>
      </div>
      <div id="story">
        <h2>The Story</h2>
        <p>${data.bio}</p>
      </div>
      <div id="photo">
        <img src=${data.avatar_url} alt="A photo of ${data.name}.">
      </div>
    </section>
  </main>`;
  // Insert content into the html
  body.innerHTML = webBody;
}
