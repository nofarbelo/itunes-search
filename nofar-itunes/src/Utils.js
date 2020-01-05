const limit = 25;

export const getApiURL = (searchQuery) => {
    return `https://itunes.apple.com/search?term=${searchQuery.split(' ').join('+')}&limit=${limit}`
}