const extractPixel = (widthString) => Number(widthString.split("px")[0]);

const showDropdown = (element) => {
  const buttonWidth = element.clientWidth;
  const buttonContainer = element.parentNode;

  const dropdown = buttonContainer.children[1];
  dropdown.hidden = !dropdown.hidden;
  dropdown.style.width = `${buttonWidth}px`;
};

const handleClick = (element) => {
  showDropdown(element);

  const buttonContainer = element.parentNode;
  const dropdown = buttonContainer.children[1];
  const dropdownIcon = element.children[1];

  const dropdownWidth = extractPixel(dropdown.style.width);
  const buttonContainerMarginBottom = extractPixel(
    window.getComputedStyle(buttonContainer).getPropertyValue("margin-bottom")
  );

  const RATIO_FOR_SPACE = 1.6;
  const spaceForDropdown = dropdownWidth / RATIO_FOR_SPACE;

  // Add space and rotate dropdown icon when dropdown is shown
  if (dropdown.hidden) {
    dropdownIcon.style.transform = "rotate(360deg)";

    buttonContainer.style.marginBottom = `${
      buttonContainerMarginBottom - spaceForDropdown
    }px`;
  } else {
    dropdownIcon.style.transform = "rotate(180deg)";

    buttonContainer.style.marginBottom = `${
      buttonContainerMarginBottom + spaceForDropdown
    }px`;
  }
};
