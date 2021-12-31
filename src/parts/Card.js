function Card({ results }) {
 
  return (
   
        <div>
            <div>
                <img src={results.avatar_url} alt={results.name} />
            </div>
            <div >
                <h2>{results.name}</h2>
                <p>{results.bio}</p>
                <ul>
                    <li>{results.followers} Follower</li>
                    <li>{results.following} Following </li>
                    <li>{results.public_repos} Repository </li>
                </ul>

               
            </div>
        </div>
   
  );
}


export default Card;