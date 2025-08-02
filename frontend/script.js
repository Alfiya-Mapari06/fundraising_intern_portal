fetch('http://localhost:5000/api/intern')
  .then(res => res.json())
  .then(data => {
    document.getElementById('internName').textContent = `Welcome, ${data.name}!`;
    document.getElementById('referralCode').textContent = data.referral;
    document.getElementById('donationAmount').textContent = data.donation.toLocaleString();
  })
  .catch(error => console.error('Error:', error));
