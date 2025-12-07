export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Haaziq Ali",
    "alternateName": "H4ZY",
    "url": "https://karou.me",
    "image": "https://avatars.githubusercontent.com/u/167455693?v=4",
    "jobTitle": "Developer",
    "description": "15 year old self-taught developer specializing in C++ and web development",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Patna",
      "addressRegion": "Bihar",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://github.com/HAAZIQ-ALI",
      "https://leetcode.com/Y4heW1qDC3",
      "https://myanimelist.net/profile/hazyDev4live"
    ],
    "knowsAbout": ["C++", "C", "Python", "JavaScript", "TypeScript", "React", "Next.js", "Systems Programming", "Web Development", "Tailwind CSS"]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
