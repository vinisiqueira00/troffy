interface HighlightsProductsItem {
    id: string,
    image: string,
    name: string,
    link: string,
}

interface ProductShelfItem {
    id: string,
    image: string,
    name: string,
    category: string,
    link: string,
    price: {
        old?: number,
        new: number,
    },
}
