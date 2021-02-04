interface CurrTeamStyles {
    team        : string;
    primary     : string;
    secondary   : string;
}

export const getDriverStyle = (id: string): CurrTeamStyles => {
    switch(true) {
        case id === 'hamilton' || id === 'bottas' || id === 'mercedes':
            return {
                team: 'Mercedes AMG Petronas F1 Team',
                primary: '#02CCB6',
                secondary: '#2E2E2E'

            };
        case id === 'max_verstappen' || id === 'albon' || id === 'red_bull':
            return {
                team: 'Red Bull Racing',
                primary: '#0000AE',
                secondary: '#F94774'
            };
        case id === 'leclerc' || id === 'vettel' || id === 'ferrari':
            return {
                team: 'Scuderia Ferrari',
                primary: '#C00000',
                secondary: '#2E2E2E'
            };
        case id === 'norris' || id === 'sainz' || id === 'mclaren':
            return {
                team: 'Mclaren Racing',
                primary: '#FF8700',
                secondary: '#2E2E2E'
            };
        case id === 'perez' || id === 'stroll' || id === 'racing_point':
            return {
                team: 'Racing Point F1 Team',
                primary: '#FB61B2',
                secondary: '#002E6C'
            };
        case id === 'gasly' || id === 'kvyat' || id === 'alphatauri':
            return {
                team: 'Scuderia AlphaTauri',
                primary: '#1B2441',
                secondary: '#D4D4D4'
            };
        case id === 'ocon' || id === 'ricciardo' || id === 'renault':
            return {
                team: 'Renault F1 Team',
                primary: '#2E2E2E',
                secondary: '#FFF500'
            };
        case id === 'giovinazzi' || id === 'raikkonen' || id === 'alfa':
            return {
                team: 'Alfa Romeo Racing',
                primary: '#960000',
                secondary: '#FFFFFF'
            };
        case id === 'latifi' || id === 'russell' || id === 'williams':
            return {
                team: 'Williams Racing',
                primary: '#0082FA',
                secondary: '#2E2E2E'
            };
        case id === 'grosjean' || id === 'kevin_magnussen' || id === 'haas':
            return {
                team: 'Haas F1 Team',
                primary: '#9A9A9A',
                secondary: '#C70A27'
            };
        
        default:
            return {
                team: '',
                primary: 'lightgrey',
                secondary: '#2E2E2E'
            };
    }
};