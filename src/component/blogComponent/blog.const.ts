export const blogs = [
  {
    id: "learn-typescript",
    title: "Why You Should Learn TypeScript in 2025",
    description:
      "Explore how TypeScript can help you write safer, scalable, and more maintainable code — and why it's a must-have skill for modern JavaScript developers.",
    content: `
### Introduction

In today's fast-moving JavaScript ecosystem, **TypeScript** is becoming more than just a "nice to have". It’s a powerful tool that enhances your development experience by catching bugs early, improving code quality, and boosting team productivity.

### What is TypeScript?

TypeScript is a superset of JavaScript that adds static typing. That means you can define the types of variables, function parameters, return values, and more — making it easier to avoid runtime errors.

### Why Learn TypeScript?

- **Better Developer Experience**: Catch bugs during development instead of in production.
- **Improved Code Quality**: Write more predictable and self-documented code.
- **Easier Refactoring**: Refactor large codebases with confidence using strong typing.
- **Community & Ecosystem**: Major libraries and frameworks like React, Next.js, and Express all support TypeScript.

### Example

Here’s a basic TypeScript function:

\`\`\`ts
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}
\`\`\`

Try calling \`greet(42)\` — TypeScript will instantly throw an error!

### Conclusion

TypeScript is not just a trend — it's an essential tool for writing robust JavaScript applications in 2025. Whether you're building small projects or large-scale apps, it's worth learning.

    `,
    author: "Abul Bashar",
    tags: ["typescript", "javascript", "web development"],
    createdAt: "2025-07-22",
    readingTime: "5 min read",
    isFeatured: true,
  },
];

export const featuredBlogs = blogs
  .filter((blog) => blog.isFeatured)
  .sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

export const nonFeaturedBlogs = blogs
  .filter((blog) => !blog.isFeatured)
  .sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
