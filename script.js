function myFunction() {
    var textToCopy = "nelltruong67@gmail.com";

    // Create a temporary input element
    var input = document.createElement("input");
    input.value = textToCopy;
    document.body.appendChild(input);

    // Select the text in the input element
    input.select();
    input.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Remove the temporary input element
    document.body.removeChild(input);

    // Provide feedback to the user (optional)
    alert("Text has been copied to the clipboard: " + textToCopy);
  }