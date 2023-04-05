import useData from "./generic data/useData";

export interface ListPlatform {
  id: number;
  name: string;
}

const usePlatforms = () => useData<ListPlatform>("/platforms/lists/parents");

export default usePlatforms;
