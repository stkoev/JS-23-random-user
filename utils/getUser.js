const URL = "https://randomuser.me/api/";

async function getUser() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    if (!response) {
      throw new Error(`something went wrong `);
    }
    const person = data.results[0];
    const { phone, email } = person;
    const { large: image } = person.picture;
    const { password } = person.login;
    const { first, last } = person.name;
    const {
      dob: { age },
    } = person;
    const {
      street: { number, name },
    } = person.location;
    return {
      phone,
      email,
      age,
      image,
      password,
      street: `${number} ${name}`,
      name: `${first} ${last}`,
    };
  } catch (error) {
    console.log(error);
    return error;
  }
}

export default getUser;
