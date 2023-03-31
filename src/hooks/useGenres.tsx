import useData from "./generic data/useData";

interface Genres {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenres = () => useData<Genres>("/genres");

export default useGenres;
