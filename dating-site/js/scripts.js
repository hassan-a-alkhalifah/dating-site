// ui logic
function Profile(firstName, lastName, phone, age, height, gender, orientation, agePref, heightPref, relationship, personality, bio, image) {
  if (generalForm.firstName.value == "") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.age = age;
    this.height = height;
    this.gender = gender;
    this.orientation = orientation;
    this.agePref = agePref;
    this.heightPref = heightPref;
    this.relationship = relationship;
    this.personality = personality;
    this.bio = bio;
    this.image = image;
  } else {
    this.firstName = generalForm.firstName.value;
    this.lastName = generalForm.lastName.value;
    this.phone = generalForm.phone.value;
    this.age = generalForm.age.value;
    this.height = generalForm.height.value;
    this.gender = generalForm.gender.value;
    this.orientation = generalForm.sexualPreference.value;
    this.agePref = generalForm.agePref.value;
    this.heightPref = generalForm.heightPreference.value;
    this.relationship = generalForm.relationshipGoal.value;
    this.personality = [];
    this.bio = generalForm.userBio.value;
    this.image = generalForm.userImage.value;
  }
}
function profileGen() {
  var outs = []
  var firstNameMale =["glod", "snurr", "hlurgh", "hggghlhughl", "ooooomp", "pfleeep"]
  var firstNameFemale = ["hlork", "glaaaar", "gneeeeed", "sneee", "pflurg", "shannon"]
  var lastName =["matrix", "kruger", "owens", "rottmayer", "fries", "kaminsky", "quaid", "hauser", "vogel", "kimble"]
  var phone ="0000000"
  var age = [25, 44]
  var height = ["short", "tall"]
  var gender = ["female", "male"]
  var orientation = ["female", "male"]
  var agePref = ["younger", "older"]
  var heightPref = ["short", "tall"]
  var relationship = ["casual", "marriage"]
  var personality = [["a"], ["b"], ["c"], ["d"]]
  var bio = ["I just love the B52’s and a good Tequila Sunrise or Pina Colada.  My idea of a first date would be dinner and clubbing till dawn.  Hope you have a Mullet and a Rolex.", "If your looking for a guy that loves to ski that’s me!  I spend a lot of time at my Condo in Vermont whenever I can get away from the brokerage. I just got a new espresso machine so my idea of a great first date would be for the two of us to learn how it works while listening to Michael Jackson on my new cassette system.", "I’m into sports cars.  I drive a new red turbo Porsche and love clubbing all the hot spots in the City.  Hoping to make a real connection with a person that feels the “need for speed” and wants a real “Top Gun” sort."]
  var imageMale = ["img/man2.jpg", "img/man2.jpg", "img/man3.jpg", "img/man4.jpg", "img/man5.jpg"]
  var imageFemale = ["img/woman1.jpg", "img/woman2.jpg", "img/woman3.jpg", "img/woman4.jpg", "img/woman5.jpg"]
  for (var h = 0; h < age.length ; h++){
    for (var i = 0; i < height.length ; i++) {
      for (var j = 0; j <gender.length ; j++) {
        for (var k = 0; k < orientation.length; k++){
          for  (var l = 0; l < agePref.length; l++){
            for (var m = 0; m <  heightPref.length; m++){
              for (var n = 0; n < relationship.length; n++){
                for (var o = 0; o < personality.length; o++) {
                  if (gender[i] == "female"){
                    outs.push(new Profile(firstNameFemale[randInt(0, firstName.length-1)], lastName[randInt(0, lastName.length-1)], phone, age[h], height[i], gender[j], orientation[k], agePref[l], heightPref[m], relaationship[n], personality[o], bio[randInt(0, bio.length-1)], imageFemale = [randInt(0, imageFemale.length-1)]))
                  } else {
                    outs.push(new Profile(firstNameMale[randInt(0, firstName.length-1)], lastName[randInt(0, lastName.length-1)], phone, age[h], height[i], gender[j], orientation[k], agePref[l], heightPref[m], relaationship[n], personality[o], bio[randInt(0, bio.length-1)], imageMale = [randInt(0, imageFemale.length-1)]))
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return outs
}
Profile.prototype.personalityType = function() {
  var i = 0;
  var quizAnswers = this.personality
  var typeA = 0;  var typeB = 0;  var typeC = 0;  var typeD = 0;
  var type = "";
  while(quizAnswers[i]) {
    if (quizAnswers[i] == "a") {
      typeA += 1;
    } else if (quizAnswers[i] == "b") {
      typeB += 1;
    } else if (quizAnswers[i] == "c") {
      typeC += 1;
    } else if (quizAnswers[i] == "d") {
      typeD += 1;
    } i++ ;
  }

  if (Math.max(typeA, typeB, typeC, typeD) == typeA) { type = "A";
} else if(Math.max(typeA, typeB, typeC, typeD) == typeB) { type = "B";
} else if(Math.max(typeA, typeB, typeC, typeD) == typeC) { type = "C";
} else if(Math.max(typeA, typeB, typeC, typeD) == typeD) { type = "D";
} return type
}

function matches(array, user) {
  // console.log(array);
  var matchGroup = []
  var currentUser = user;
  array.forEach(function(person, index){
    if ((currentUser.orientation == person.gender && person.orientation == currentUser.gender) && (currentUser.relationship == person.relationship) && (currentUser.height == person.heightPref && person.height == currentUser.heightPref)){
      if(((currentUser.agePref == "younger" && person.age < 40 )|| (currentUser.agePref == "older" && person.age >= 40)) && ((person.agePref == "younger" && currentUser.age < 40 )|| (person.agePref == "older" && currentUser.age >= 40))){
        matchGroup.push(person);
      }}
    })
    return matchGroup
  }
  function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  // Submit form
  $(document).ready(function() {

    // $("#landingPageButton").click(function() {
    //   $(".landing-page").hide();
    //   $(".demographics-page").show();
    // });
    // $("#dateWithFate").click(function() {
    //   $(".landing-page").hide();
    //   $(".demographics-page").show();
    // });

    var allProfiles = [];
    var person = {};
console.log(profileGen);;
    allProfiles.push(new Profile("man1", "manLast1", "#", 34, "short", "male", "female", "younger", "tall", "casual", ["a"], "Interest", "img/man1.jpg"));


    allProfiles.push(new Profile("man2", "manLast1", "#", 34, "short", "male", "female", "younger", "short", "casual", ["a"], "I like you", "img/man1.jpg"));

    allProfiles.push(new Profile("female1", "femaleLast1", "#", 34, "tall", "female", "male", "younger", "tall", "casual", ["a"], "I like you", "img"));

    console.log(allProfiles[0]);
    $("#generalForm").submit(function(event){
      event.preventDefault();
      // $("#generalForm").hide();
      $("#personalityForm").show();
      person = new Profile();
      allProfiles.push(person);
      console.log(person);
    }); //generalForm close

    $("#findMatchButton").click(function(event){
      event.preventDefault();
      // $("#personalityForm").hide();
      $("#matches").show();
      $("#personList").empty()
      person.personality.splice(0, person.personality.length);
      $('input:radio[class = questions]:checked').each(function(){
        var personalityQuestions = $(this).val();
        person.personality.push(personalityQuestions);
      }); //personalityForm close
      var yourMatches = matches(allProfiles, person);
      console.log(yourMatches);
      var match = {}
      for (var i = 0 ; i < yourMatches.length; i++){
        match = yourMatches[i];
        $("#personList").append( '<div class="card" style="width: 18rem;">' +
        '<img class="card-img-top match" src="img/man1.jpg" alt="Card image cap">' +
        '<div class="card-body">' +
        '<h5 class="card-title"> Name:' + match.firstName + '</h5>' +
        '<p class="card-text">Bio:<span class="bioCard"></span></p>' +
        '</div>' +
        '<ul class="list-group list-group-flush">' +
        '<li class="list-group-item">Age: <span class="ageCard"></span></li>' +
        '<li class="list-group-item">Height: <span class="heightCard"></span></li>' +
        '<li class="list-group-item">Relationship Goal: <span class="relationshipGoalCard"></span></li>' +
        '<li class="list-group-item">Number: <span class="numberCard"></span></li>' +
        '</ul>' +
        '</div>');
        console.log(yourMatches[i]);
        $(".match").last().click(function() {

        });

      }
    }); //Form Closing
  }); //Document Closing
