export type GamePlatform = 'XBOX' | 'PC' | 'PLAYSTATION';

export interface Game {
    id: number,
    title: string,
    platform: GamePlatform,
    label: string,
    value: number
}