export default interface IPost {
    metadata: {
        title: string,
        description: string,
        date: Date,
        src: string,
        alt: string,
        dimensions: [number, number]
    }

    slug: string,
}