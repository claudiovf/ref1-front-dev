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