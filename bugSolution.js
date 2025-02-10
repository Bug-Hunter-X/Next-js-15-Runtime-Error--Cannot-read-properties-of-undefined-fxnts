```javascript
// pages/index.js
export default function Home() {
  const data = { someProperty: 'Hello' }; //Simulate data fetching
  const someProperty = data?.someProperty || 'Default Value'; // Optional chaining and nullish coalescing

  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <p>{someProperty}</p>
    </div>
  );
}
```