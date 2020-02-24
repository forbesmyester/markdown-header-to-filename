import assert from "assert";

export default function markdownHeaderToFilename(header: string): string {
    if (header.length > 255) {
        header = header.substr(0, 255);
    }
    return header
        .replace(/[^a-zA-Z0-9\-_ ]/g, ' ')
        .replace(/  +/g, ' ')
        .trim()
}


assert.equal(
    markdownHeaderToFilename(' Hello! world! '),
    'Hello world'
);

