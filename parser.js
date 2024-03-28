// Define the parser function
const parser = (markdown, delimiter, tag) =>
  markdown.replace(new RegExp(`${delimiter}(.+)${delimiter}`, 'g'), `<${tag}>$1</${tag}>`);

// Example markdown string
const markdownText = "This is _italic_ and **bold** text.";

// Use the parser function to wrap italic text with <em> tags and bold text with <strong> tags
const htmlText = parser(markdownText, '_', 'em');
const finalHtmlText = parser(htmlText, '\\*\\*', 'strong'); // Need to escape * because it's a special character in regular expressions

// Output the transformed HTML text
console.log(finalHtmlText);

