const imgPath = 'https://pbs.twimg.com/profile_images'
const imgId = '1934246235327868928/3uqfs3jU'

window.addEventListener('DOMContentLoaded', () => {
  const faviconImg = document.getElementById("faviconImg");
  const profileImg = document.getElementById("profileImg");

  faviconImg.href = imgPath + '/' + imgId + '_normal.jpg';
  profileImg.src = imgPath + '/' + imgId + '_400x400.jpg';
})
