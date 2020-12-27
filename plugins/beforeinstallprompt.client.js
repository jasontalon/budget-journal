import Vue from 'vue'

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault()
  // Stash the event so it can be triggered later.
  //deferredPrompt = e
  Vue.prototype.$addToHome = e
  alert("can add to home screen!")
  // Update UI notify the user they can install the PWA
})
