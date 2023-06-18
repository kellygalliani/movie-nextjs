import { useEffect } from "react";

import BillBoard from "@/components/Billboard";
import Navbar from "@/components/Navbar";
import useMovieList from "@/hooks/useMovieList";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import MovieList from "@/components/MovieList";
import useFavoriteMovies from "@/hooks/useFavoriteMovies";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default function Home() {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavoriteMovies();

  return (
    <>
      <Navbar />
      <BillBoard />
      <div className="pb-40">
        <MovieList data={movies} title="Trending Now" />
        <MovieList data={favorites} title="My List" />
      </div>
    </>
  );
}
