let timeChoice = "";
let type = "";
let final_activity = [];
let timeDuration = "";
let activity = "";


let indoorFiveToTen = [
  "📒 Try journaling in a notebook! 📒", 
  "💭 Think of something you are grateful for in your life and why 💭",
  "🙆‍♀️ Stretch your limbs! 🙆‍♀️",
  "🎵 Listen to a song you loved when you were younger but haven’t heard in a long time. 🎵",
  "🎶 Make a playlist and put all of your hype songs on it! 🎶"
]

let outdoorFiveToTen = [
	'🚶‍♀️ Go for a short walk! 🚶‍♀️',
	'🙆‍♀️ Take a stretch! 🙆‍♀️ ️',
	'🌻 Go out and water some plants that need it. 🌻',
	'📸 Take some pictures outside. 📸',
	'📝 Find anything outside and write about it. 📝',
]

let indoorTenToThirty = [
	'📒 Try journaling in a notebook! 📒',
	'📝 Write down 10 reasons why anybody would fall in love with you. 📝',
	'📝 Write some poetry! 📝',
	'📚 Read a book you’ve been wanting to read 📚',
	'🎨 Make a scrapbook, paint, color in a coloring book. 🎨'
]

let outdoorTenToThirty = [
	'🚶‍♀️ Go for a long walk! 🚶‍♀️️',
	'👩‍🍳 Make some food and give them away to a neighbor, family member, friend, or someone you know. 👩‍🍳',
	'🚲 Ride a bike. 🚲',
	'🏃‍♀️ Go for a light jog! 🏃‍♀️',
	'🍟 Go out and buy yourself your favorite snack. 🍟'
]

let indoorThirtyToSixty = [
	'🎵Listen to soothing music. 🎵',
	'🎤 Sing loudly (karaoke)! 🎤',
	'🗓 Intentionally schedule “me time." 🗓',
	'🎧 Listen to a podcast about something that interests you that you haven’t yet explored. 🎧',
	'🖍 Color in a coloring book. 🖍',
	'📝 Doodle your thoughts. 📝',
	'☕️ Drink a hot cup of chocolate while looking out the window (especially during winter)! ☕️️'
]

let outdoorThirtyToSixty = [
	'🌱 Plant a container garden. 🌱',
	'🚶‍♀️ Go for a long walk/hike! 🚶‍♀️️',
	'🚲 Ride a bike to places you have not been to before. 🚲',
	'🧺 Go outside and have a picnic (with or without friends/family!). 🧺',
	'🐕 o outside and play with your pet! 🐕',
]

let indoorSixtyPlus = [
	'👩‍🍳 Make yourself a gourmet meal (gourmet grilled cheese?). 👩‍🍳',
	'💅 Manicure & pedicure with favorite music. 💅',
	'🛁 Take a bubble bath with a good book. 🛁',
	'🧵 Watch a craft tutorial on YouTube and make a craft. 🧵',
	'✂️ Make an inspiration collage and hang it where you can see it. Use it to help generate new ideas and thoughts when you need them. ✂️️',
	'👗 Clean out your closet and donate/upcycle old clothes! 👗',
	'🎡 Go to a virtual amusement park! (i.e, Walt Disney World, Legoland, Seaworld) 🎡',
	'📺 Watch your favorite feel-good sitcom and laugh all your worries away. 📺',
	'🧵 Knit/crochet/sew, and do it for a social cause such as sewing masks. 🧵',
	'🏡 Dedicate a day to learning more about the local history where you live. 🏡',
 	'💻 Visit a museum of interest (virtually), and from around the world! (Smithsonian, NASA, The Air Force Museum, etc.) 💻'
]

let outdoorSixtyPlus = [
	'🚶‍♀️ Take a walk at a nearby park. 🚶‍♀️',
	'🧺 Have a picnic in your backyard, around nature. 🧺',
	'🃏 Spend time with family by playing a board or card game. 🃏',
	'🎿 Go skiing or rock climbing. 🎿',
	'🥾 Go hiking at a nearby trail. 🥾',
	'👯‍♀️ Host a virtual party with friends. 👯‍♀️️',
]

function onTimeClick(value){
  timeChoice = value.split(" ")[0];
}

function onTypeClick(value){
  type = value;
}

function randomize(activities){
  const activityNumber = Math.floor(Math.random() * (activities.length));
  console.log(activities[activityNumber]);
  return activities[activityNumber];
}

function onTryAgainClick(){
  activity = "";
  document.getElementById("chosen-activity-container").innerHTML = "Sending a new activity your way!" ;
  return 
}

function onEnterClick(){
  if(!timeChoice.length || !type.length){
    alert("Enter both your preferred time and type!");
    return
  }
  
  if(timeChoice==="5-10"){
    if(type==="Indoors"){
      final_activity.push(randomize(indoorFiveToTen)); 
    }
    else if(type==="Outdoors"){
      final_activity.push(randomize(outdoorFiveToTen));
    }
    else{
      const fiveToTen = indoorFiveToTen.concat(outdoorFiveToTen);
      final_activity.push(randomize(fiveToTen));
    }
  }
  else if(timeChoice==="10-30"){
    if(type==="Indoors"){
      final_activity.push(randomize(indoorTenToThirty)); 
    }
    else if(type==="Outdoors"){
      final_activity.push(randomize(outdoorTenToThirty));
    }
    else{
      const tenToThirty = indoorTenToThirty.concat(outdoorTenToThirty);
      final_activity.push(randomize(tenToThirty));
    }
  }

  else if(timeChoice==="30-60"){
    if(type==="Indoors"){
      final_activity.push(randomize(indoorThirtyToSixty)); 
    }
    else if(type==="Outdoors"){
      final_activity.push(randomize(outdoorThirtyToSixty));
    }
    else{
      const thirtyToSixty = indoorThirtyToSixty.concat(outdoorThirtyToSixty);
      final_activity.push(randomize(thirtyToSixty));
    }
  }
  else if(timeChoice==="60+"){
    if(type==="Indoors"){
      final_activity.push(randomize(indoorSixtyPlus)); 
    }
    else if(type==="Outdoors"){
      final_activity.push(randomize(outdoorSixtyPlus));
    }
    else{
      const sixtyPlus = indoorSixtyPlus.concat(outdoorSixtyPlus);
      final_activity.push(randomize(sixtyPlus));
    }
  }
  timeChoice = "";
  type = "";

  if(final_activity.length > 1){
    activity = randomize(final_activity);
  } else {
    activity = final_activity[0];
  }
  final_activity = [];
  document.getElementById("chosen-activity-container").innerHTML = activity;

}
