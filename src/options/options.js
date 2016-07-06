// Saves options to chrome.storage.sync.
function save_options() {
  console.log('trying to save');
  var twitterUser = document.getElementById('twitterUser').value;
  chrome.storage.sync.set({
    twitterUser: twitterUser
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    twitterUser: '',
  }, function(items) {
    document.getElementById('twitterUser').value = items.twitterUser;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);