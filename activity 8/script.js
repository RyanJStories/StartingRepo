// Utility function to get element by id
function get(element) {
    return document.getElementById(element);
  }
  
  // Application functions
  function openModal() {
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');
  
    modal.classList.add('visible');
    backdrop.classList.add('visible');
  }
  
  function closeModal() {
    var title = get('edit-title-text');
    var text = get('edit-content-text');
  
    // Clear text
    title.value = '';
    text.value = '';
  
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');
  
    // Hide modal
    modal.classList.remove('visible');
    backdrop.classList.remove('visible');
  }
  
  function saveContent() {
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var content = get('display-content');
  
    // Create content elements
    var newTitle = document.createElement('h2');
    var newTitleText = document.createTextNode(title.value);
    var newContent = document.createElement('p');
    var newContentText = document.createTextNode(text.value);
  
    // Add elements
    newTitle.appendChild(newTitleText);
    newContent.appendChild(newContentText);
    content.appendChild(newTitle);
    content.appendChild(newContent);
  
    closeModal();
  }
  
  // Event listeners
  window.addEventListener('load', function() {
    var newButton = get('new-button');
    var cancelButton = get('cancel-button');
    var saveButton = get('save-button');
  
    newButton.addEventListener('click', openModal);
    cancelButton.addEventListener('click', closeModal);
    saveButton.addEventListener('click', saveContent);
  });
  