// Function to remove the template tag
function removeTemplateTag() {
  // Select the template tag
  const templateTag = document.querySelector("template");

  // Check if the template tag exists
  if (templateTag) {
    // Replace the template tag with its contents
    templateTag.replaceWith(...templateTag.content.childNodes);

    // Remove the scroll event listener once the template tag is removed
    window.removeEventListener("scroll", removeTemplateTagOnScroll);
  }
}

// Function to handle scroll event and remove template tag
function removeTemplateTagOnScroll() {
  // Call the function to remove the template tag
  removeTemplateTag();
}

// Add scroll event listener to remove template tag when scrolling occurs
window.addEventListener("scroll", removeTemplateTagOnScroll);
