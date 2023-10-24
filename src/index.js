import ReactDOM from 'react-dom/client';

console.log(document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <header>
      <h2>My First React Header.</h2>
    </header>
    <main>
      <section>
        <ul>
          <h3>Looney Tunes Characters</h3>
          <li>Bugs Bunny</li>
          <li>Daffy Duck</li>
          <li>Elmer Fudd</li>
        </ul>
      </section>
      <section>
        <ol>
          <h3>Space Jam Movies Ranked</h3>
          <li>Space Jam (1996)</li>
          <li>Space Jam: A New Legacy (2021)</li>
        </ol>
      </section>
      <section>
        <q>Eh, what's up, Doc?</q>
        <p>- Bugs Bunny</p>
      </section>
    </main>
    <footer>
      <p>my frst react footer.</p>
    </footer>
  </div>
);