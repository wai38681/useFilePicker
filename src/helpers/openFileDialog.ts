export function openFileDialog(accept: string, multiple: boolean, callback: (arg: Event) => void, filePickerRef) {
  // this function must be called from a user
  // activation event (ie an onclick event)
  console.log(filePickerRef.current);

  filePickerRef.current.type = 'file';

  filePickerRef.current.accept = accept;

  filePickerRef.current.multiple = multiple;

  filePickerRef.current.addEventListener('change', callback);

  filePickerRef.current.addEventListener('blur', callback);

  filePickerRef.current.dispatchEvent(new MouseEvent('click'));
  // Create an input element
  // var inputElement = document.createElement('input');
  // // Set its type to file
  // inputElement.type = 'file';
  // // Set accept to the file types you want the user to select.
  // // Include both the file extension and the mime type
  // inputElement.accept = accept;
  // // Accept multiple files
  // inputElement.multiple = multiple;
  // // set onchange event to call callback when user has selected file
  // inputElement.addEventListener('change', callback);
  // // set onblur event to call callback when user has selected file on Safari
  // inputElement.addEventListener('blur', callback);
  // // dispatch a click event to open the file dialog
  // inputElement.dispatchEvent(new MouseEvent('click'));
}
