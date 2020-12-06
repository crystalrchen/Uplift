// LIST OF ACTIVITIES
var indoorFiveToTen = [
	"Try journaling in a notebook", 
	"Think of something you are grateful for in your life and why", 
	"Stretch your limbs", 
	"Listen to a song you loved when you were younger but haven’t heard in a long time.", 
	"Make a playlist and put all of your hype songs on it! ",
]

var outdoorFiveToTen = [
	'Go for a walk',
	'Take a stretch!',
	'Go out and water some plants that need it',
	'Take some pictures outside.',
	'Find anything outside and write about it',
]

var indoorTenToThirty = [
	'Try journaling in a notebook',
	'Write down 10 reasons why anybody would fall in love with you.',
	'Write some poetry',
	'Read a book you’ve been wanting to read',
	'Make a scrapbook, paint, color in a coloring book '
]

var outdoorTenToThirty = [
	'Go for a walk!'
	'Make some food and give them away to a neighbor, family member, friend, or someone you know.'
	'Ride a bike.'
	'Go for a light jog!'
	'Go out and buy yourself your favorite snack.'
]

var indoorThirtyToSixty = [
	'Listen to soothing music'
	'Sing loudly (karaoke)''
	'Intentionally schedule “me time."'
	'Listen to a podcast about something that interests you that you haven’t yet explored.'
	'Color in a coloring book.''
	'Doodle your thoughts.'
	'Drink a hot cup of chocolate while looking out the window(especially during winter)!'
]

var outdoorThirtyToSixty = [
	'Plant a container garden.''
	'Go for a long walk/hike!'
	'Ride a bike to places you haven\'t been to before.'
	'Go outside and have a picnic (with or without friends/family!).'
	'Go outside and play with your pet!'

]





let time_choices = [];
let type = [];
function onTimeClick(value){
  time_choices.push(value);
  console.log(time_choices);
}
function onTypeClick(value){
  type = []
  type.push(value);
  console.log(type);
}

function onEnterClick(){
  if(!time_choices.length || !type.length){
    alert("Enter your preferred time and type!!");
    return
  }
  // TODO - Need to extract each value and give quotes based on value
  console.log(time_choices, type);
}
