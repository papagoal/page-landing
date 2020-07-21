import React, {Component} from 'react';
import Cherry from "./Cherry";

class Durian extends Component {
    render() {
        const linksToRender = [
            {
                id: '1',
                description: 'Prisma turns your database into a GraphQL API 😎',
                url: 'https://www.prismagraphql.com',
            },
            {
                id: '2',
                description: 'The best GraphQL client',
                url: 'https://www.apollographql.com/docs/react/',
            },
        ]
        return (
            <div>
                This is Durian
                <div>
                    {linksToRender.map(link => <Cherry key={link.id} cherry={link} />)}
                </div>
            </div>
        );
    }
}

export default Durian;