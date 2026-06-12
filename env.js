const usrId = 'Yuun'
const usrName = 'ゆん'
const imgPath = 'https://pbs.twimg.com/profile_images'
const imgId = '1940383195616231424/-etCXOTy'
const avatars = [
  {
    name : 'Airi',
    assetId : 6082686,
    priority: 3
  },
  {
    name : 'Aldina',
    assetId : 1777704,
    priority: 5
  },
  {
    name : 'Bairan',
    assetId : 5929122,
    priority: 5
  },
  {
    name : 'Manuka',
    assetId : 5058077,
    priority: 2
  },
  {
    name : 'Selestia',
    assetId : 4035411,
    priority: 4
  },
  {
    name : 'Shinano',
    assetId : 6106863,
    priority: 1
  },
  {
    name : 'Wolferia',
    assetId : 2709610,
    priority: 4
  }
]

avatars.sort(function(a, b){
  if (a.priority < b.priority) return -1;
  if (a.priority > b.priority) return 1;
  return 0;
})

window.addEventListener('DOMContentLoaded', () => {
  document.title = usrName + ' (' + usrId + ') | ' + document.title
  const faviconImg = document.getElementById('faviconImg')
  const profileImg = document.getElementById('profileImg')

  faviconImg.href = imgPath + '/' + imgId + '_normal.jpg'
  profileImg.src = imgPath + '/' + imgId + '_400x400.jpg'

  const userVar = document.getElementById('userVar')
  userVar.textContent = usrName + ' (' + usrId + ')'

  const usingAvatars = document.getElementById('usingAvatars')
  var avatarsTxtTemp = ''
  for (var _key in avatars) {
    avatarsTxtTemp = avatarsTxtTemp + '<a class="avatarBtn" href="https://booth.pm/ja/items/' + avatars[_key].assetId + '" target="_blank">' + avatars[_key].name + '</a>'
    if (_key != (avatars.length - 1)) {
      avatarsTxtTemp = avatarsTxtTemp + ', '
    }
  }
  usingAvatars.innerHTML = usingAvatars.innerHTML + avatarsTxtTemp
})
