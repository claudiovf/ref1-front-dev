import { gql } from '@apollo/client';

export const CURRENT_DRIVERS_HOME = gql`
    query {
        allDrivers(
            period: "2020"
        ) {
            givenName
            familyName
            code
            permanentNumber
            driverId
            entries {
                points
            }
        }
  }
`;

export const CURRENT_TEAMS_HOME = gql`
    query {
        allTeams(
            period: "2020"
        ) {
            name
            constructorId
        }
  }
`;

export const DRIVER_PROFILE = gql`
    query getDriver(
        $driverId: String!
    ) {
        findDriver(
            driverId: $driverId
        ) {
            givenName
            familyName
            driverId
            code
            nationality
            dateOfBirth
            permanentNumber
            seasonsIn
            championships
            entries {
                period
                entries
                firstEntry {
                    date
                    race
                }
                lastEntry {
                    date
                    race
                }
                points
                avgPoints
                bestResult
                worstResult
                avgPosition
                championshipRank
                vsTeammates {
                    driverAhead
                    teammatesAhead
                    pctAhead
                }
                stats {
                    stat
                    total
                    pct
                    first {
                        date
                        race
                    }
                    last {
                        date
                        race
                    }
                }
            }
        }
    }
`;

export const TEAM_PROFILE = gql`
    query getTeam(
        $constructorId: String!
    ) {
        findTeam(
            constructorId: $constructorId
        ) {
            name
            constructorId
            url
            nationality
            seasonsIn
            championships
            entries {
                period
                entries
                firstEntry {
                    date
                    race
                }
                lastEntry {
                    date
                    race
                }
                points
                avgPoints
                bestResult
                worstResult
                avgPosition
                championshipRank
                drivers
                stats {
                    stat
                    total
                    pct
                    first {
                        date
                        race
                    }
                    last {
                        date
                        race
                    }
                }
            }
        }
    }
`;

export const GET_THIS_DRIVERS = gql`
    query getThisDrivers($driversList: [String!]!){
        findManyDrivers (
        driversList: $driversList
        ) {
            givenName
            familyName
            driverId
        }
    }
`;

export const GET_SEASON_DRIVERS = gql`
    query getThisDrivers($driversList: [String!]!){
        findManyDrivers (
        driversList: $driversList
        ) {
            givenName
            familyName
            driverId
            code
            permanentNumber
        }
    }
`;

export const GET_SEASON_TEAMS = gql`
    query getTeams($teamsList: [String!]!){
        findManyTeams(
        teamsList: $teamsList
        ) {
            name
            constructorId
    
        }
    }
`;

// {
//     givenName
//     familyName
//     code
//     permanentNumber
//     seasonsIn
//     championships
//     entries {
//         period
//         entries
//         firstEntry {
//             date
//             race
//         }
//         lastEntry {
//             date
//             race
//         }
//         points
//         avgPoints
//         bestResult
//         worstResult
//         avgPosition
//         championshipRank
//         vsTeammates {
//             driverAhead
//             teammatesAhead
//             pctAhead
//         }
//         stats {
//             stat
//             total
//             pct
//             first {
//                 date
//                 race
//             }
//             last {
//                 date
//                 race
//             }
//         }
//     }
// }