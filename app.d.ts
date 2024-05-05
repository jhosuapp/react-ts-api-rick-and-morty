
type ICharacters = {
    id: number,
    name: string,
    status: string,
    species: string,
    image: string,
    location: { name: string }
    origin: { name: string }
}

type ICharacter = {
    character: {
        id: number,
        name: string,
        status: string,
        species: string,
        image: string,
        location: { name: string }
        origin: { name: string }
    }
}

type IInfo = {
    count: number,
    pages: number,
    next: string | null,
    prev: string | null,
}

type IInfoPager = {
    info: {
        count: number,
        pages: number,
        next: string | null,
        prev: string | null,
    }
}