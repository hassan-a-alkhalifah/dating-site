// ui logic
function Profile() {
  this.firstName = generalForm.firstName.value;
  this.lastName = generalForm.lastName.value;
  this.phone = generalForm.phone.value;
  this.age = generalForm.age.value;
  this.gender = generalForm.gender.value;
  this.height = generalForm.height.value;
  this.orientation = generalForm.sexualPreference.value;
  this.agePref = generalForm.agePref.value;
  this.heightPref = generalForm.heightPreference.value;
  this.relationship = generalForm.relationshipGoal.value;
  this.personality = [];
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

// Submit form
  $(document).ready(function() {

    var allProfiles = [];
    var person = {}

  $("#submitGeneralFormButton").click(function(event){
    event.preventDefault();
    $("#generalForm").hide();
    $("#personalityForm").show();
    person = new Profile()
    allProfiles.push(person);
    // console.log(allProfiles);

    $("#personlist").append(allProfiles);


  }); //generalForm close

  $("#findMatchButton").click(function(event){
    event.preventDefault();
    $("#personalityForm").hide();
    $("#matches").show();

    $('select[name="personality"] option:selected').each(function(){
      var personalityQuestions = $(this).val();
      person.personality.push(personalityQuestions);
      console.log(person.personality);
      console.log(person);
    }); //personalityForm close
      console.log(person);
  }); //Form Closing

}); //Document Closing
