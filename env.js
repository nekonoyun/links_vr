const usrId = 'Yuun'
const usrName = 'ゆん'
const imgPath = 'https://pbs.twimg.com/profile_images'
const imgId = '1940383195616231424/-etCXOTy'

window.addEventListener('DOMContentLoaded', () => {
  document.title = usrName + ' (' + usrId + ') | ' + document.title
  const faviconImg = document.getElementById('faviconImg')
  const profileImg = document.getElementById('profileImg')

  faviconImg.href = imgPath + '/' + imgId + '_normal.jpg'
  profileImg.src = imgPath + '/' + imgId + '_400x400.jpg'

  const userVar = document.getElementById('userVar')
  userVar.textContent = usrName + ' (' + usrId + ')'
})
