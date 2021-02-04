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
//     }