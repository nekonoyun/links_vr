var username = {}
username['Resonite'] = 'Yuun'

const copyBtnReso = document.getElementById('btn_resonite')
copyBtnReso.href = 'javascript:void(0);'
copyBtnReso.addEventListener('click', () => {
  var tagType = 'Resonite'
  copyToClipboard(tagType + ' のユーザー名', username[tagType])
});

function copyToClipboard (tagType, tagValue) {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(tagValue).then(function () {
      alert(tagType + 'がクリップボードにコピーされました')
    })
  } else {
    tagText.select()
    document.execCommand('copy')
    alert(tagType + 'がクリップボードにコピーされました')
  }
}
