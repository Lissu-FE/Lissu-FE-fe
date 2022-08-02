import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';

import { checkIdRegex, checkPwRegex } from '../../../utilities/login';
import { postLogin } from '../../../api/authApi';

const useLoginMain = () => {
  const [authInfo, setAuthInfo] = useState({ id: '', password: '' });
  const [warning, setWarning] = useState({ id: false, password: false });
  const { replace } = useRouter();

  const { mutate } = useMutation(postLogin, {
    onSuccess: () => {
      replace('/');
    },
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === 'id') {
      setAuthInfo((prev) => ({ ...prev, id: value }));
      if (warning.id) {
        checkAuth(e);
      }
      return;
    }

    setAuthInfo((prev) => ({ ...prev, password: value }));
    if (warning.password) {
      checkAuth(e);
    }
  };

  const checkAuth = ({ target: { value, name } }: ChangeEvent<HTMLInputElement>) => {
    if (name === 'id') {
      setWarning((prev) => ({ ...prev, id: !checkIdRegex(value) }));
    } else {
      setWarning((prev) => ({ ...prev, password: !checkPwRegex(value) }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutate(authInfo);
  };

  return {
    authInfo,
    handleInput,
    warning,
    checkAuth,
    handleSubmit,
    checkIdRegex,
    checkPwRegex,
  };
};

export default useLoginMain;
