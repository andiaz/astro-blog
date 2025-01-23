import { visit } from 'unist-util-visit';

export function remarkWikiLinks() {
  return function (tree, file) {
    // Extract category from the file path
    const filePath = file.history[0] || '';
    const matches = filePath.match(/\/pages\/([^/]+)\//);
    const currentCategory = matches ? matches[1] : '';

    visit(tree, 'text', function (node) {
      const regex = /\[\[(.*?)\]\]/g;
      const matches = node.value.match(regex);

      if (matches) {
        const segments = [];
        let lastIndex = 0;

        for (const match of matches) {
          const index = node.value.indexOf(match, lastIndex);
          // Add text before the match
          if (index > lastIndex) {
            segments.push({
              type: 'text',
              value: node.value.slice(lastIndex, index),
            });
          }

          // Get the link text and display text from inside [[]]
          const innerContent = match.slice(2, -2);
          let linkPath, displayText;

          // Check if there's a display text separator
          if (innerContent.includes('|')) {
            [linkPath, displayText] = innerContent
              .split('|')
              .map((s) => s.trim());
          } else {
            linkPath = innerContent.trim();
            displayText = linkPath;
          }

          // Create the href
          let href;
          // Remove any display text part before processing the URL
          const urlPath = linkPath.split('|')[0].trim();

          if (urlPath.includes('/')) {
            // If path contains slash, use as is
            href = '/' + urlPath.toLowerCase().replace(/\s+/g, '-');
          } else {
            // If no category specified, use current category
            href =
              `/${currentCategory}/` +
              urlPath.toLowerCase().replace(/\s+/g, '-');
          }

          segments.push({
            type: 'link',
            url: href,
            children: [
              {
                type: 'text',
                value: displayText,
              },
            ],
          });

          lastIndex = index + match.length;
        }

        // Add remaining text after last match
        if (lastIndex < node.value.length) {
          segments.push({
            type: 'text',
            value: node.value.slice(lastIndex),
          });
        }

        node.type = 'paragraph';
        node.children = segments;
        delete node.value;
      }
    });
  };
}
