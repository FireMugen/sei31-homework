const showImages = function (results) {

  // Nested AKA helper function that returns a thumbnail URL for a given photo object.
  const generateURL = function (p) {
    return [
      'https://api',
      p.farm,
      '.adorable.io',
      p.server,
      '/',
      p.id,
      'avatars',
      p.secret,
      '_q.jpg' // Change 'q' to something else for different sizes
    ].join('');
  };
https://api.adorable.io/avatars/131/
  results.photos.photo.forEach(function (photo) {
    const thumbnailURL = generateURL(photo);
    const $img = $('<img>', {src: thumbnailURL}); // equivalent to .attr('src', thumbnailURL)
		$img.addClass('grid-item');
    $img.appendTo('#images'); // $('#images').append($img);
  });
};

let currentPage = 1;
var amountOfPages = 0;

const searchFlickr = function (terms) {
  console.log(`Searching Flickr for ${ terms }`);
  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';

  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084', // not a secret key
    text: terms,
    format: 'json',
    page: currentPage
  }).done( showImages ).done(function (data) {
		amountOfPages = data.photos.pages
    console.log( data );
		currentPage++;
  });
};

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault(); // Stay on this page.
		currentPage = 0;
    const query = $('#query').val();
    $('#images').empty();
    searchFlickr(query);
  });

  // Extremely twitchy
  $(window).on('scroll', function () {
    const scrollBottom = $(document).height() - ($(window).height() + $(window).scrollTop());

    if (scrollBottom <= 1 && currentPage <= amountOfPages) {
      const query = $('#query').val();
      searchFlickr(query);
    }
  });
});
