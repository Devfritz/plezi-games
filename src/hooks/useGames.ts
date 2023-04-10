import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./generic data/useData";
import { Genres } from "./useGenres";
import { ListPlatform } from "./usePlatforms";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
const useGames = (
  selectedGenres: Genres | null,
  selectedPlatform: ListPlatform | null,
  selectedSort: string
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenres?.id,
        platforms: selectedPlatform?.id,
        ordering: selectedSort,
      },
    },
    [selectedGenres?.id, selectedPlatform?.id, selectedSort]
  );

export default useGames;
