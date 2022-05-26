import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
   width: 80px;
   height: 80px;
   background-color: ${({ theme }) => theme.colors.shape};
   border-top-left-radius: 16px;
   border-top-right-radius: 16px;
   border-bottom-right-radius: 16px;
   margin: 8px;
`;

export const CardImage = styled.Image`
    width: 75px;
    height: 75px;
    margin-top: 4px;
    border-top-left-radius: 16px;
   border-top-right-radius: 16px;
   border-bottom-right-radius: 16px;
`;