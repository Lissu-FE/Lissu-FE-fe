import { useState, ChangeEvent } from 'react';
import { checkIdRegex, checkPwRegex } from '../../../utilities/login';

const useLoginMain = () => {
  const [authInfo, setAuthInfo] = useState({ id: '', password: '' });
  const [warning, setWarning] = useState({ id: false, password: false });
  const [isDisabled, setIsDisabled] = useState(true);

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

    if (!warning.id && !warning.password) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  return { authInfo, handleInput, warning, checkAuth, isDisabled };
};

export default useLoginMain;
