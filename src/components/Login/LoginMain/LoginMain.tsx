import {
  LoginMainWrapper,
  TextInput,
  LoginButton,
  InputLabel,
  InputWrapper,
} from './LoginMainStyle';
import useLoginMain from './useLoginMain';

const LoginMain = () => {
  const { authInfo, handleInput, warning, checkAuth, isDisabled } = useLoginMain();

  return (
    <LoginMainWrapper>
      <InputWrapper>
        <InputLabel>아이디</InputLabel>
        <TextInput
          type='text'
          value={authInfo.id}
          onChange={handleInput}
          name='id'
          onBlur={checkAuth}
        />
        {warning.id && <>올바른 아이디 형식으로 입력해 주세요.</>}
      </InputWrapper>
      <InputWrapper>
        <InputLabel>비밀번호</InputLabel>
        <TextInput
          type='password'
          value={authInfo.password}
          onChange={handleInput}
          name='password'
          onBlur={checkAuth}
        />
        {warning.password && <>올바른 비밀번호 형식으로 입력해주세요.</>}
      </InputWrapper>
      <LoginButton disabled={isDisabled} type='submit'>
        로그인
      </LoginButton>
    </LoginMainWrapper>
  );
};

export default LoginMain;
