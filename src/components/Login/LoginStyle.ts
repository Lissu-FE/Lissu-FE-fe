import styled from 'styled-components';

export const LoginWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding: 0 20px 40px;
  gap: 16px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputLabel = styled.div`
  font-weight: 700;
  font-size: 13px;
  color: #6c6c7d;
`;

export const TextInput = styled.input<{ $isWarning: boolean }>`
  padding: 16px;
  border-radius: 12px;
  background: #f7f7fa;

  ${({ $isWarning }) => $isWarning && `background: #FDEDEE`}
`;

export const LoginButton = styled.button`
  margin-top: 40px;
  padding: 20px;
  border-radius: 12px;
  background-color: #222;
  color: #fff;

  &:disabled {
    background-color: #e2e2ea;
  }
`;

export const WarningText = styled.div`
  font-size: 13px;
  color: #ed4e5c;
`;
