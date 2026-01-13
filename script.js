// Scroll right function
let scrollPosition = 0;

function scrollRight() {
  const scrollBox = document.getElementById('scrollBox');
  const content = scrollBox.querySelector('.scroll-content');
  const itemWidth = content.querySelector('.item').offsetWidth;

  if (scrollPosition >= content.scrollWidth - itemWidth) {
    scrollPosition = 0;
  } else {
    scrollPosition += itemWidth;
  }

  content.style.transform = `translateX(-${scrollPosition}px)`;
}
// signup route
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  // Save user to DB (add validation)
  await db.collection('users').insertOne({ username, email, password, history: [] });
  res.status(200).send('OK');
});
const user = JSON.parse(localStorage.getItem('user'));
if (user) {
  user.history.push(searchTerm);
  localStorage.setItem('user', JSON.stringify(user));
}
<script>
  // Example: user is logged in and name is "user"
  const userName = "user";
  const initial = userName.charAt(0).toUpperCase();
  document.querySelector('.profile-circle').textContent = initial;
<script>
  // Show popup when send icon is clicked
  document.getElementById("send-arrow").addEventListener("click", function() {
    document.getElementById("share-popup-overlay").style.display = "block";
  });

  // Close popup
  function closePopup() {
    document.getElementById("share-popup-overlay").style.display = "none";
  }

  // Copy link
  function copySiteLink() {
    const link = window.location.href;
    navigator.clipboard.writeText(link).then(() => {
      const status = document.getElementById("popup-copy-status");
      status.style.display = "block";
      setTimeout(() => {
        status.style.display = "none";
      }, 2000);
    }).catch(() => {
      alert("Nije moguće kopirati link.");
    });
  }
