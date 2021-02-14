type TeamType = {
    id: number,
    name: string,
    venue: string,
    location: string
}

type TeamDetailsType = {
    stats: {
        wins: number,
        loses: number,
        points: number,
        goalsPerGame: number
    },
    ranks: {
        wins: string,
        loses: string,
        points: string,
        goalsPerGame: string
    }
}

export {
    TeamType,
    TeamDetailsType
}