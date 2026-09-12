import movieSearchImg from "@/assets/projects/movie-search.jpg";
import weatherNowImg from "@/assets/projects/weather-now.jpg";
import blogAppImg from "@/assets/projects/blog-app.jpg";
import prayerTimeImg from "@/assets/projects/prayer-time.jpg";
import quizAppImg from "@/assets/projects/quiz-app.jpg";

export interface Project {
  title: string;
  description: string;
  url: string;
  tags: string[];
  image: string;
  comingSoon?: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: "Movie Search",
    description:
      "Frontend Mentor's Entertainment Web App design, connected to a live movie API with Firebase auth and Firestore bookmarks.",
    url: "https://github.com/mahmoud202202766-creator/movie-search-app",
    tags: ["React", "TMDB API", "Firebase"],
    image: movieSearchImg,
  },
  {
    title: "Weather Now",
    description:
      "Frontend Mentor weather app challenge, built in React with live forecasts via the Open-Meteo API.",
    url: "https://github.com/mahmoud202202766-creator/weather-now",
    tags: ["React", "Open-Meteo API"],
    image: weatherNowImg,
  },
  {
    title: "Blog App",
    description:
      "CRUD blog application with full REST API integration, migrated from json-server to MockAPI, deployed on Vercel.",
    url: "https://github.com/mahmoud202202766-creator/blog-app",
    tags: ["React", "REST API", "CRUD"],
    image: blogAppImg,
  },
  {
    title: "Prayer Time",
    description:
      "Shows the five daily prayer times for a chosen city, with the current Hijri date.",
    url: "https://github.com/mahmoud202202766-creator/Prayer-Time",
    tags: ["JavaScript"],
    image: prayerTimeImg,
  },
  {
    title: "Quiz App",
    description: "An interactive quiz application practice project.",
    url: "https://github.com/mahmoud202202766-creator/Quiz-App",
    tags: ["JavaScript"],
    image: quizAppImg,
  },
];
