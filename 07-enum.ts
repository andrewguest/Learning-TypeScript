// enums allow us to declare a set of named constants
//  i.e. a collection of related values that can be numeric or string values.
enum PrintMedia {
    Newspaper,
    Newsletter,
    Magazine,
    Book
}

// The enum can be used as a function parameter or return type
function getMedia(mediaName: string): PrintMedia {
    if (mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia.Magazine;
    }
}

let mediaType: PrintMedia = getMedia('Forbes'); // returns Magazine