export const sampleCode = `// this is a codeblock
render() {
  return (<div>
    {fetchedPeople.map((person, id) => (
      <p key={id}>Hello, {person.name} from
        {person.country}
      </p>
    ))} 
  </div>);
}`;
