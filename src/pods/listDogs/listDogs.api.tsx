import { DogData } from "./listDogs.vm";

export const fetchDataListDogs = async (currentPage: number, setLoadingImages: { ({ }: boolean): void; (arg0: boolean): void; }) => {

    const apiKey = import.meta.env.VITE_DOGS_API_KEY;
    setLoadingImages(true);
    try {
        const response = await fetch(`https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=DESC&page=${currentPage}&limit=10`, {
            method: 'get',
            headers: {
                'x-api-key': apiKey
            }
        });
        const data = await response.json();

        if (response.ok) {

            const dogs = data.map((dog: DogData) => ({
                id: dog.id,
                picUrl: dog.url,
                title: dog.breeds[0].name,
                temperament: dog.breeds[0].temperament,
                description: dog.breeds[0].description,
                selected: false,

            }

            ));
            console.log(dogs);
            return dogs;
        }


    } catch (error) {
        console.log('Error fetching data:', error)
    } finally {
        setLoadingImages(false);
    }
}