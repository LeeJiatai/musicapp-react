import { get } from './base'

export function getRecommend() {
    return get('http://127.0.0.1:8080/api/getRecommend')
}
