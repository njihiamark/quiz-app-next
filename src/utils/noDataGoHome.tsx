export default function noDataGoHome(error, data, pending, route){
    if (error) {
        route.push('/welcome', undefined, { shallow: true })
    }
    if (!data.length && !pending) {
        route.push('/welcome', undefined, { shallow: true })
    }
}