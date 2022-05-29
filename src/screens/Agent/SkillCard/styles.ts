import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
   flex: 1;
   width: 100%;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 20px;
`;

export const SkillImage = styled.Image`
    width: 80px;
    height: 80px;
`;

export const Content = styled.View`
    margin-left: 10px;
`;

export const SkillName = styled.Text`
    color: ${({ theme }) => theme.colors.red};
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    opacity: 0.6;
`;

export const SkillDescription = styled.Text`
    font-size: ${RFValue(12)}px;
    padding-right: 119px;
    text-align: justify;
    color: ${({ theme }) => theme.colors.description};
    opacity: 0.7;
`;