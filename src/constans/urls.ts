const baseURL: string = 'http://owu.linkpc.net/carsAPI/v1';

const cars: string = '/cars';

const urls = {
    cars: {
        base: cars,
        byId: (id: number): string => `${cars}/${id}`
    }
}

export {
    baseURL,
    urls
};