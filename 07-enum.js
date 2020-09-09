// enums allow us to declare a set of named constants
//  i.e. a collection of related values that can be numeric or string values.
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 0] = "Newspaper";
    PrintMedia[PrintMedia["Newsletter"] = 1] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = 2] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 3] = "Book";
})(PrintMedia || (PrintMedia = {}));
// The enum can be used as a function parameter or return type
function getMedia(mediaName) {
    if (mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia.Magazine;
    }
}
var mediaType = getMedia('Forbes'); // returns Magazine
