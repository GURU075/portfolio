const profiles = [
  { name: "GitHub", href: "https://github.com/GURU075", id: "github", label: "Explore my code" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/gururaj-yadav/", id: "linkedin", label: "Let’s connect" },
  { name: "LeetCode", href: "https://leetcode.com/u/guru075/", id: "leetcode", label: "Problem solving" },
];

function ProfileIcon({ id }: { id: string }) {
  if (id === "linkedin") {
    return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.2 3a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.4 9h3.6v12H3.4V9Zm6 0h3.5v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6V21h-3.7v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1v6H9.4V9Z" /></svg>;
  }
  if (id === "github") {
    return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 19c-4.3 1.3-4.3-2.2-6-2.7M15 22v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.2-1.5 6.2-6.8A5.3 5.3 0 0 0 18.8 5a4.9 4.9 0 0 0-.1-3.6s-1.2-.4-3.9 1.5a13.4 13.4 0 0 0-7 0C5.1 1 3.9 1.4 3.9 1.4A4.9 4.9 0 0 0 3.8 5a5.3 5.3 0 0 0-1.5 3.7c0 5.2 3.2 6.4 6.2 6.8a3.4 3.4 0 0 0-.9 2.6V22" /></svg>;
  }
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m16 3-7 7a3 3 0 0 0 0 4l5 5a3 3 0 0 0 4 0l2-2M9 10l-3 3a3 3 0 0 0 0 4l4 4M11 14h10" /></svg>;
}

export default function ProfileLinks() {
  return (
    <nav className="profile-links" aria-label="Find me online">
      <p className="profile-heading">Find me online <span aria-hidden="true" /></p>
      <div className="profile-grid">
      {profiles.map((profile) => (
        <a
          key={profile.name}
          className={`profile-card profile-${profile.id}`}
          href={profile.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="profile-icon"><ProfileIcon id={profile.id} /></span>
          <span className="profile-arrow" aria-hidden="true">↗</span>
          <span className="profile-name">{profile.name}</span>
          <span className="profile-description">{profile.label}</span>
          <span className="contact-status"> (opens in a new tab)</span>
        </a>
      ))}
      </div>
    </nav>
  );
}
