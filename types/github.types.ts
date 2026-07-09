import { IconType } from "react-icons/lib";

export type GitHubUser = {
  followers: number;
  public_repos: number;
};

export type GitHubRepo = {
  stargazers_count: number;
  forks_count: number;
};

export interface GitHubCommit {
  sha: string;
  message: string;
}

export interface GitHubEvent {
  type: string;
  payload?: {
    commits?: GitHubCommit[];
  };
}

export interface GitHubPushEvent {
  type: "PushEvent";
  payload: {
    commits: {
      sha: string;
      message: string;
    }[];
  };
}

export interface GitHubStats {
  followers: number;
  stars: number;
  forks: number;
  publicRepos: number;
}

export interface GitHubCommits {
  commits: number;
}

export type GithubStatItem = {
  icon: IconType;
  numberData: number | null;
  name: string;
};