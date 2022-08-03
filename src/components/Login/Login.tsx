import {
  LoginWrapper,
  TextInput,
  LoginButton,
  InputLabel,
  InputWrapper,
  WarningText,
} from './LoginStyle';
import useLoginMain from './useLogin';

const LoginMain = () => {
  const { authInfo, handleInput, warning, checkAuth, handleSubmit, checkIdRegex, checkPwRegex } =
    useLoginMain();

  return (
    <LoginWrapper onSubmit={handleSubmit}>
      <InputWrapper>
        <InputLabel>아이디</InputLabel>
        <TextInput
          type='text'
          value={authInfo.id}
          onChange={handleInput}
          name='id'
          onBlur={checkAuth}
          $isWarning={warning.id}
        />
        {warning.id && <WarningText>올바른 아이디 형식으로 입력해 주세요.</WarningText>}
      </InputWrapper>
      <InputWrapper>
        <InputLabel>비밀번호</InputLabel>
        <TextInput
          type='password'
          value={authInfo.password}
          onChange={handleInput}
          name='password'
          onBlur={checkAuth}
          $isWarning={warning.password}
        />
        {warning.password && <WarningText>올바른 비밀번호 형식으로 입력해주세요.</WarningText>}
      </InputWrapper>
      <LoginButton
        disabled={!checkIdRegex(authInfo.id) || !checkPwRegex(authInfo.password)}
        type='submit'
      >
        로그인
      </LoginButton>
    </LoginWrapper>
  );
};

export default LoginMain;
