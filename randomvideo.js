var videos = [
'6C5PpaOWWv4',
'Es1vReWCdZQ',
'oM9e3uhJV0c',
'DdT9jA5rlNU',
'jCRgTMuFGWM',
'Vn1H5fogXOU',
'h_wmhJ7CTmU',
'JBewKoqC050',
'JtWjs5LCheM',
'i5uUIt-nl2c',
'1FsRjeY-Psg'
];

var index=Math.floor(Math.random() * videos.length);
var html='<iframe style="padding: 16px 0;height:250px;" src="https://www.youtube.com/embed/' + videos[index] + '" allowfullscreen></iframe>';
document.write(html);
