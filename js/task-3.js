function getElementWidth(content, padding, border) {
    // We convert parameter values ​​into numbers, discarding "px" and calculate their sum
    const contentWidth = parseInt(content);
    const paddingWidth = parseInt(padding);
    const borderWidth = parseInt(border);
    // We calculate the total width of the element taking into account box-sizing: border-box

    const totalWidth = contentWidth + paddingWidth * 2 + borderWidth * 2;

    // Return the calculated width as a number
    return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200