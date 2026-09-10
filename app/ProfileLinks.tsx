const profiles = [
  { name: "GitHub", href: "https://github.com/GURU075" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/gururaj-yadav/" },
  { name: "LeetCode", href: "https://leetcode.com/u/guru075/" },
];

export default function ProfileLinks() {
  return (
    <nav className="profile-links" aria-label="Find me online">
      {profiles.map((profile) => (
        <a
          key={profile.name}
          href={profile.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {profile.name}
          <span aria-hidden="true">↗</span>
          <span className="contact-status"> (opens in a new tab)</span>
        </a>
      ))}
    </nav>
  );
}
