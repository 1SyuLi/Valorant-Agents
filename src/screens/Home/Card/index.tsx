import React from 'react';

import {
    Container,
    CardImage,
} from './styles';

interface CardProps {
    image: string;
}

export function Card({ image }: CardProps) {
    return (
        <Container>
            <CardImage source={{ uri: image }} />
        </Container>
    );
}