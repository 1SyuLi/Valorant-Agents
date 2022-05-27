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
    width: 500px;
    height: 500px;
    opacity: 0.1;
    position: absolute;
    top: 80px;
    left: 0px;
`;