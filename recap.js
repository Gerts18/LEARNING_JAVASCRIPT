document.getElementById('ol').addEventListener('click', (e) => {
  if (e.target.tagName === 'LI' ) {
   console.log('desde: ' + e.target.id);
  }
})

