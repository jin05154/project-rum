function submitSignUp() {
  // 가입할 때 사용자가 입력한 정보들을 저장할 배열입니다.
  var attributeList = [];

  // 입력 폼에서 입력된 값을 받아오는 부분입니다. 일반적인 javascript입니다.
  var user_FamilyName = document.getElementById("signup_userfamilyname").value;
  var user_Name = document.getElementById("signup_username").value;
  var user_ID = document.getElementById("signup_id").value;
  var user_PW = document.getElementById("signup_pw").value;
  var user_EmailAddress = document.getElementById("signup_email").value;
  var user_PhoneNumber = document.getElementById("signup_phonenumber").value;
  var user_Birthday = document.getElementById("signup_birthday").value;
  var user_Gender = document.getElementById("signup_gender").value;
  console.log('user data : ', user_FamilyName, ', ', user_Name, ', ', user_ID, ', ', user_PW, ', ',
    user_EmailAddress, ', ', user_PhoneNumber, ', ', user_Birthday, ', ', user_Gender);

  // 이 변수가 사용자가 입력한 정보 중 하나를 입력하는 변수입니다.
  // 저는 핸드폰 번호만 입력받았습니다.
  // 변수명은 자유롭게 사용가능하나, Name은 AWS Cognito에서 정해주는대로 써야합니다.
  // 목록 : address, birthdate, email, family_name, gender, given_name, locale
  //   , middle_name, name, nickname, phone_number, picture, preferred_username
  //   , profile, timezone, updated_at, website
  var dataFamilyName = {
    Name: 'family_name',
    Value: user_FamilyName
  };
  var dataName = {
    Name: 'name',
    Value: user_Name
  };
  var dataEmailAddress = {
    Name: 'email',
    Value: user_EmailAddress
  };
  var dataPhoneNumber = {
    Name: 'phone_number',
    Value: user_PhoneNumber
  };
  var dataBirthday = {
    Name: 'birthdate',
    Value: user_Birthday
  };
  var dataGender = {
    Name: 'gender',
    Value: user_Gender
  };

  // Attribute를 AWS Cognito가 알아들을 수 있는 객체로 만듭니다.
  var attributeFamilyName = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataFamilyName);
  var attributeName = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataName);
  var attributeEmailAddress = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataEmailAddress);
  var attributePhoneNumber = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataPhoneNumber);
  var attributeBirthday = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataBirthday);
  var attributeGender = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataGender);

  // 방금 위에서 만든 Attribute 객체를 Attribute List에 추가시킵니다.
  // 이렇게 배열에 다 추가시키고 한번에 Cognito에 넘길겁니다.
  attributeList.push(attributeFamilyName);
  attributeList.push(attributeName);
  attributeList.push(attributeEmailAddress);
  attributeList.push(attributePhoneNumber);
  attributeList.push(attributeBirthday);
  attributeList.push(attributeGender);

  // 전역변수로 만들어 놓은 User Pool 객체에서는 signup 함수를 제공합니다.
  // 인자는 User name(ID 인것 같네요.), Password, Attribute List, null(무슨 자리인지 모르겠어요..확인해야합니다.ㅎㅎ), 처리 결과가 오면 수행 될 callback 함수 입니다.
  userPool.signUp(user_ID, user_PW, attributeList, null, function (err, result) {
    if (err) {
      // error가 발생하면 여기로 빠집니다.
      alert(err);
      return;
    }

    // 가입이 성공하면 result에 가입된 User의 정보가 되돌아 옵니다.
    // 인증 함수에서 사용해야하기에 위에서 만든 전역변수인 cognitoUser에 넣어놓습니다.
    cognitoUser = result.user;
    console.log('user name is ' + cognitoUser.getUsername());
  });
}