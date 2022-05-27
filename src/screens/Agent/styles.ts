import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
   flex: 1;
   background-color: ${({ theme }) => theme.colors.background};
`;

export const BackButton = styled(Feather)`
    font-size: ${RFValue(32)}px;
    color: ${({ theme }) => theme.colors.shape};
    margin-top: 45px;
    margin-left: 6px;
`;

export const BackGroundImage = styled.ImageBackground`
    width: 300px;
    height: 300px;
    opacity: 0.2;
    position: absolute;
    top: 100px;
    right: -30px;
`;

export const Header = styled.View`
    width: 100%;
    margin: 20px 32px 0px 32px;
    justify-content: center;
`;

export const AgentName = styled.Text`
    font-size: ${RFValue(32)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.red};
`;

export const Class = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ClassName = styled.Text`
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.white};
`;

export const ClassIcon = styled.Image`
    width: 25px;
    height: 25px;
    margin-left: 12px;
`;

export const ClassDescription = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.description};
    text-align: justify;
    max-width: 85%;
    line-height: 26px;
    opacity: 0.8;
    margin-top: 6px;
`;