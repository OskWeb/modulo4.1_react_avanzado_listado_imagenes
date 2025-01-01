import { CatsData } from "./listCats.vm";

export const fetchDataListCats = async (page: number, setLoadingCats: { ({ }: boolean): void; (arg0: boolean): void; }) => {

    const apiKey = import.meta.env.VITE_CATS_API_KEY;
    setLoadingCats(true);
    try {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=DESC&page=${page}&limit=10`, {
            method: 'get',
            headers: {
                'x-api-key': apiKey
            }
        });
        const data = await response.json();

        if (response.ok) {
            const cats = data
                .filter((cat: CatsData) =>
                    cat.breeds[0]?.name.length > 0 &&
                    cat.breeds[0]?.name !== 'Aegean' &&
                    cat.breeds[0]?.name !== 'Abyssinian'
                )
                .map((cat: CatsData) => ({
                    id: cat.id,
                    picUrl: cat.url,
                    title: cat.breeds[0]?.name,
                    temperament: cat.breeds[0]?.temperament,
                    description: cat.breeds[0]?.description,
                    selected: false
                }));
            return cats;
        }
    } catch (error) {
        console.log('Error fetching data:', error)
    } finally {
        setLoadingCats(false);
    }
}