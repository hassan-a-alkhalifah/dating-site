// ui logic
function Profile(firstName, lastName, phone, age, height, gender, orientation, agePref, heightPref, relationship, personality) {
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
  if (this.firstName == "") {
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
  console.log(array);
  var matchGroup = array.slice();
  console.log(matchGroup);
  var currentUser = user;
matchGroup.forEach(function(person, index){
  if (currentUser.relationship !== person.relationship);
    matchGroup.splice(index, 1);
  })
  return matchGroup
}
// Submit form
  $(document).ready(function() {

    var allProfiles = [];
    var person = {};
    allProfiles.push(new Profile("Hulk", "Hogan", "111-1111", 34, "tall", "male", "female", "older", "tall", "casual", ["a"]))
    // allProfiles.push(new Profile("Talia", "Shire", "111-1111", 34, "tall", "male", "female", "older", "tall", "casual", "a"))
// console.log(allProfiles);

  $("#generalForm").submit(function(event){
    event.preventDefault();
    // $("#generalForm").hide();
    $("#personalityForm").show();

    // console.log(allProfiles);
    person = new Profile();
    allProfiles.push(person);

    // var allProfilesOutput = allProfiles.join(",");
    // $("#personList").text(allProfiles);

    $("#personList").append("<div class='card'><span class='personListSingle'>" + allProfiles + "</span></div>");


  }); //generalForm close

  $("#findMatchButton").click(function(event){
    event.preventDefault();
    // $("#personalityForm").hide();
    $("#matches").show();
    $('select[name="personality"] option:selected').each(function(){
      var personalityQuestions = $(this).val();
      person.personality.push(personalityQuestions);
      }); //personalityForm close
    // console.log(matches(allProfiles, person))
    // console.log(allProfiles);
    }); //Form Closing
}); //Document Closing
