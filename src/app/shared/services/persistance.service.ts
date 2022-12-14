import { Injectable } from '@angular/core'

@Injectable()
export class PersistanceService {
    set(key: string, data: any): void {
        try {
            localStorage.setItem(key, JSON.stringify(data))
        } catch(e) {
            console.error(e, 'Error saving to localStorage')
        }
    }

    get(key: string): any {
        try {
            return JSON.parse(localStorage.getItem(key))
        } catch(e) {
            console.error(e, 'Error getting data from localStorage')
            return null
        }
    }
}