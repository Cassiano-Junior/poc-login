import styled from 'styled-components';
import { Typography, Input as AInput, Button} from 'antd';

export const Container = styled.div`
    
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fafafa;

`

export const Card = styled.div`
    border: solid 1px #D6D6D6;
    border-radius: 26px;
    padding: 62px 40px 32px 42px;
    display: flex;
    flex-direction: column;
    width: 500px;
`

export const Title = styled(Typography.Text)`
    font-size: 35px;

    font-weight: 500;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`

export const Subtitle = styled(Typography.Text)`
    font-size: 25px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-bottom: 46px;
`

export const Input = styled(AInput)`
    padding: 13px 16px;
    font-size: 15px;
    border-radius: 10px;
    border: 1px solid #EAEAEA;

    &:focus {
        box-shadow: 0px 10px 40px 0px #AEAEAE20;
    }
`
export const InputPassword = styled(AInput.Password)`
    padding: 13px 16px;
    font-size: 15px;
    border-radius: 10px;
    border: 1px solid #EAEAEA;

    &:focus {
        box-shadow: 0px 10px 40px 0px #AEAEAE20;
    }
`

export const StyledButton = styled(Button)`
    width: 100%;
    padding: 24px 190px;
`