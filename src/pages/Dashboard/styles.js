import styled from 'styled-components'

import { Typography, Input as AInput } from 'antd'

export const Input = styled(AInput)`
    width: 350px;
    padding: 13px 16px;
    font-size: 15px;
    border-radius: 10px;
    border: 1px solid #EAEAEA;

    &:focus {
        box-shadow: 0px 10px 40px 0px #AEAEAE20;
    }
`

export const Label = styled(Typography.Text)`
    font-size: 22px;
    font-weight: 600;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`