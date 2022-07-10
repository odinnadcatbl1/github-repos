const getRepos = async (username) => {
    const url = 'https://api.github.com/users/';

    const result = await fetch(`${url}${username}/repos`)

    if (!result.ok) {
        throw new Error(`Could not fetch ${username} repositories` + `, received ${result.status}`);
    }

    return await result.json();
}

export default getRepos;