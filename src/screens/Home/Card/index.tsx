import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
    Container,
    CardImage,
} from './styles';

interface CardProps extends TouchableOpacityProps {
    image: string;
}

export function Card({ image, ...rest }: CardProps) {
    return (
        <Container activeOpacity={0.6} {...rest}>
            <CardImage source={{ uri: image }} />
        </Container>
    );
}