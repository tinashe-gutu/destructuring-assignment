function listFollowers(followerNames: string[]): string {
  // complete function
  // use array destructuring, for practice!
  const [firstFollower, secondFollower] = followerNames;

  return `Followed by ${firstFollower}, ${secondFollower} and others`;
}

export default listFollowers;
