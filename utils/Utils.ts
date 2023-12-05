export abstract class Util {
    static randomizar(base: number, limit: number) {
        return Math.round(base + Math.random() * (limit - base))
    }
}