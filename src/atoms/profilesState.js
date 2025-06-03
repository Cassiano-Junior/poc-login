import { atom } from 'recoil'

export const profilesState = atom({
    key: 'profilesState',
    default: {
        profiles: [],
        selectedProfile: 0
    }
})