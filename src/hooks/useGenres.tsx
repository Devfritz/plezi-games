import useData from "./useData";

interface Genres {
  id: number;
  name: string;
  slug: string;
}

const useGenres = () => useData<Genres>("/genres");

export default useGenres;
