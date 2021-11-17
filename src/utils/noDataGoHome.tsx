export default function noDataGoHome(error, data, pending, route){
    if (error) {
        route.push('/', undefined, { shallow: true })
    }
    if (!data.length && !pending) {
        route.push('/', undefined, { shallow: true })
    }
}