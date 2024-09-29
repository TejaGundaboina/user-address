<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>User Registration</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>User Registration</h1>
    <form id="user-form">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
      
      <label for="address">Address:</label>
      <input type="text" id="address" name="address" required>
      
      <button type="submit">Submit</button>
    </form>
    <div id="response"></div>
  </div>

  <script>
    const form = document.getElementById('user-form');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = {
        name: document.getElementById('name').value,
        address: document.getElementById('address').value
      };
      
      fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        document.getElementById('response').innerHTML = 'User and Address saved successfully!';
      })
      .catch(error => console.error('Error:', error));
    });
  </script>
</body>
</html>
