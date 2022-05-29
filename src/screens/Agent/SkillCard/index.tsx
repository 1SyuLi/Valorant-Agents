import React from 'react';

import {
    Container,
    SkillImage,
    Content,
    SkillName,
    SkillDescription
} from './styles';

export function SkillCard() {
    return (
        <Container>
            <SkillImage source={{ uri: 'https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/abilities/ability1/displayicon.png' }} />
            <Content>
                <SkillName>Seize</SkillName>
                <SkillDescription>
                    EQUIP a knot of raw fear. FIRE to throw.
                    The knot drops down after a set time.
                    RE-USE to drop the knot early.
                    The knot ruptures on impact,
                    holding nearby enemies in place.
                    Held enemies are deafened, and decayed.
                </SkillDescription>
            </Content>
        </Container>
    );
}