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
  if ((currentUser.orientation == person.gender && person.orientation == currentUser.gender) && (currentUser.relationship == person.relationship) && (currentUser.height == person.heightPref && person.height == currentUser.heightPref) && (currentUser.personalityType() == person.personalityType())){
    if(((currentUser.agePref == "younger" && person.age < 40 )|| (currentUser.agePref == "older" && person.age >= 40)) && ((person.agePref == "younger" && currentUser.age < 40 )|| (person.agePref == "older" && currentUser.age >= 40))){
      matchGroup.push(person);
  }}
  })
  return matchGroup
}

// Submit form
  $(document).ready(function() {

  $("#landingPageButton").click(function() {
      $(".landing-page").hide();
      $(".demographics-page").show();
    });
    $("#dateWithFate").click(function() {
        $(".landing-page").hide();
        $(".demographics-page").show();
      });

    var allProfiles = [];
    var person = {};
    allProfiles.push(new Profile("man1", "manLast1", "#", 34, "short", "male", "female", "younger", "short", "casual", ["a"], "I like you", "img"));
    // allProfiles.push(new Profile("man2", "manLast2", "#", 34, "short", "male", "female", "older", "short", "marriage", ["a"]));
    // allProfiles.push(new Profile("man3", "manLast3", "#", 34, "short", "male", "female", "older", "short", "casual", ["a"]));
    // allProfiles.push(new Profile("man4", "manLast4", "#", 34, "tall", "male", "female", "older", "short", "marriage", ["a"]));
    // allProfiles.push(new Profile("man5", "manLast5", "#", 34, "short", "male", "male", "older", "short", "casual", ["a"]));
    // allProfiles.push(new Profile("man6", "manLast6", "#", 60, "tall", "male", "female", "younger", "tall", "marraige", ["a"]));
    // allProfiles.push(new Profile("man7", "manLast7", "#", 77, "tall", "male", "female", "younger", "tall", "casual", ["a"]));
    // allProfiles.push(new Profile("man8", "manLast8", "#", 40, "tall", "male", "female", "younger", "tall", "marriage", ["a"]));
    // allProfiles.push(new Profile("man9", "manLast9", "#", 34, "tall", "male", "female", "younger", "tall", "casual", ["a"]));
    // allProfiles.push(new Profile("man10", "manLast10", "#", 34, "tall", "male", "male", "younger", "tall", "marriage", ["a"]));
    allProfiles.push(new Profile("female1", "femaleLast1", "#", 34, "tall", "female", "male", "younger", "tall", "casual", ["a"], "I like you", "img"));
    // allProfiles.push(new Profile("female2", "femaleLast2", "#", 55, "short", "female", "male", "older", "tall", "casual", ["a"]));
    // allProfiles.push(new Profile("female3", "femaleLast3", "#", 42, "tall", "female", "male", "older", "short", "marriage", ["a"]));
    // allProfiles.push(new Profile("female4", "femaleLast4", "#", 44, "tall", "female", "female", "older", "tall", "casual", ["a"]));
    // allProfiles.push(new Profile("female5", "femaleLast5", "#", 34, "tall", "female", "female", "older", "tall", "casual", ["a"]));
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
    person.personality.splice(0, person.personality.length);
    $('select[name="personality"] option:selected').each(function(){
      var personalityQuestions = $(this).val();
      person.personality.push(personalityQuestions);
      }); //personalityForm close
      var yourMatches = matches(allProfiles, person);
      console.log(yourMatches);
      console.log(person);
    }); //Form Closing
    console.log(person);
}); //Document Closing
