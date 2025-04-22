export default function Header() {
  return (
    <section className="my-6">
      <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
        Skills
      </h2>
      <ul
        className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4 text-gray-700"
        style={{ listStyle: "none" }}
      >
        <li>React.js</li>
        <li>JavaScript (ES6+)</li>
        <li>HTML/CSS</li>
        <li>Tailwind CSS</li>
        <li>Redux</li>
        <li>Git/GitHub</li>
        <li>REST APIs</li>
        <li>Next.js</li>
        <li>Node.js</li>
      </ul>
    </section>
  );
}
