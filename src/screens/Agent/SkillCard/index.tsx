import React from 'react';

import {
    Container,
    SkillImage,
    Content,
    SkillName,
    SkillDescription
} from './styles';

interface SkillCardProps {
    name: string;
    description: string;
    image: string;
}

export function SkillCard({ name, description, image }: SkillCardProps) {
    return (
        <Container>
            <SkillImage source={{ uri: image }} />
            <Content>
                <SkillName>{name}</SkillName>
                <SkillDescription>
                    {description}
                </SkillDescription>
            </Content>
        </Container>
    );
}