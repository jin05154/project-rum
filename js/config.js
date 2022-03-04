// AWSCognito 객체를 계속해서 사용하는데 여기에 리전 정보를 저장합니다.
// CognitoConfig.region이 위에서 별도의 js 파일에 넣어둔 설정값입니다.
AWSCognito.config.region = CognitoConfig.region;

// 사용할 User Pool의 정보를 담고있는 변수입니다.
var poolData = {
  UserPoolId : CognitoConfig.userPoolId,
  ClientId : CognitoConfig.appClientId
};

// 입력한 User Pool 정보를 가지고 실제 User Pool에 접근할 수 있는 객체를 만듭니다.
var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);

// 아래 변수는 회원가입을 하고 가입이 성공했을 때 사용자 정보를 반환받는 변수인데,
// 회원가입 함수와 인증 함수에서 같은 객체를 사용해야하기 때문에 전역변수로 뺐습니다.
var cognitoUser;