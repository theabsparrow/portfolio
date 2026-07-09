/* eslint-disable @typescript-eslint/no-unused-vars */
import { GitHubEvent } from "@/types/github.types";

export const GET = async () => {
  const username = "theabsparrow";
  const headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
  };
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/events/public`,
      { headers },
    );
    if (!res.ok) {
      return Response.json(
        { error: "Failed to fetch GitHub events" },
        { status: 500 },
      );
    }

    const events: GitHubEvent[] = await res.json();
    const pushEvents = events.filter((event) => event.type === "PushEvent");

    const totalCommits = pushEvents.reduce((count, event) => {
      return count + (event.payload?.commits?.length ?? 0);
    }, 0);

    return Response.json({ commits: totalCommits });
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch GitHub events" },
      { status: 500 },
    );
  }
};
