"use client";
import { useEffect, useState } from "react";
import { IoIosStarOutline } from "react-icons/io";
import { PiGitFork } from "react-icons/pi";
import { IoGitBranchOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import Link from "next/link";
import Skeleton from "./Skeleton";
import {
  GitHubCommits,
  GithubStatItem,
  GitHubStats,
} from "@/types/github.types";

const GithubState = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [commits, setCommits] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((data: GitHubStats) => setStats(data));
  }, []);

  useEffect(() => {
    fetch("/api/github-commits")
      .then((res) => res.json())
      .then((data: GitHubCommits) => setCommits(data.commits));
  }, []);

  const githubStats: GithubStatItem[] = [
    { icon: IoIosStarOutline, numberData: stats?.stars ?? null, name: "stars" },
    { icon: IoGitBranchOutline, numberData: commits, name: "commits" },
    { icon: PiGitFork, numberData: stats?.forks ?? null, name: "forks" },
    {
      icon: PiGitFork,
      numberData: stats?.publicRepos ?? null,
      name: "repositories",
    },
    {
      icon: FiUsers,
      numberData: stats?.followers ?? null,
      name: "GitHub followers",
    },
  ];

  return (
    <div>
      {!stats || commits === null ? (
        <Skeleton />
      ) : (
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 lg:gap-0">
          {githubStats.map((githubStat) => (
            <Link
              key={githubStat?.name}
              href={`${process.env.NEXT_PUBLIC_GITHUB_LINK}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xl hover:text-blue-500 hover:bg-gray-600 rounded-xl px-2 duration-500"
            >
              {" "}
              <githubStat.icon /> {githubStat?.numberData} {githubStat?.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default GithubState;
