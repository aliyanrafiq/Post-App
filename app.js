
function post() {
  var userName = document.getElementById("userName");
  var description = document.getElementById("description");
  var posts = document.getElementById("posts")

  posts.innerHTML += `<div class="card">
    <div class="card-header">
    <blockquote class="blockquote mb-0">
        <p>${userName.value}</p>
    </div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <footer class="blockquote-footer">${description.value}</cite>
        </footer>
      </blockquote>
    </div>
  </div>`
  userName.value = "";
  description.value = "";
}