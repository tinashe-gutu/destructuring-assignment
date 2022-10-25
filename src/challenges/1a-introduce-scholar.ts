interface Scholar {
  firstName: string;
  lastName: string;
  cohortNumber: number;
}

function introduceScholar({firstName, lastName, cohortNumber}: Scholar): string {
  // complete function
  // use object destructuring, for practice!
  return `${firstName} ${lastName} is an Academy Scholar, on Cohort ${cohortNumber}.`;
}

export default introduceScholar;
