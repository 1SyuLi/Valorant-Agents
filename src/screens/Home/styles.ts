import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
   flex: 1;
   background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    margin: 60px 24px 0px 24px;
    flex-direction: row;
    align-items: center;
`;

export const Logo = styled.Image`
    margin-right: 20px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(18)}px;
`;