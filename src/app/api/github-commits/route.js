// export const GET = async () => {
//   const username = "theabsparrow";
//   const headers = {
//     Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
//   };
//   try {
//     const res = await fetch(
//       `https://api.github.com/users/${username}/events/public`,
//       { headers }
//     );
//     if (!res.ok) {
//       return Response.json(
//         { error: "Failed to fetch GitHub events" },
//         { status: 500 }
//       );
//     }

//     const events = await res.json();
//     const pushEvents = events.filter((event) => event.type === "PushEvent");
//     const totalCommits = pushEvents.reduce((count, event) => {
//       return count + event?.payload?.commits.length;
//     }, 0);

//     return Response.json({ commits: totalCommits });
//   } catch (error) {
//     return Response.json(
//       { error: "Failed to fetch GitHub events" },
//       { status: 500 }
//     );
//   }
// };

export async function GET() {
  const query = `
  {
    user(login: "theabsparrow") {
      repositories(first: 100, ownerAffiliations: OWNER, isFork: false) {
        nodes {
          name
          defaultBranchRef {
            target {
              ... on Commit {
                history {
                  totalCount
                }
              }
            }
          }
        }
      }
    }
  }
  `;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });

  const data = await res.json();

  if (!res.ok) {
    return Response.json({ error: "GitHub API failed", data }, { status: 500 });
  }

  const repos = data?.data?.user?.repositories?.nodes || [];
  const totalCommits = repos.reduce(
    (sum, repo) =>
      sum + (repo.defaultBranchRef?.target?.history?.totalCount || 0),
    0
  );
  return Response.json({ totalCommits });
}
