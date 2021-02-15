type TeamType = {
    id: number,
    name: string,
    venue: string,
    location: string
}

type TeamDetailsType = {
    stats: StatsType,
    ranks: RanksType
}

type StatsType = {
    wins: number,
    loses: number,
    points: number,
    goalsPerGame: number
}

type RanksType = {
    wins: string,
    loses: string,
    points: string,
    goalsPerGame: string
}

export {
    TeamType,
    TeamDetailsType,
    StatsType,
    RanksType
}