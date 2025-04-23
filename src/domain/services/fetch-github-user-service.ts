"use server";

import type { GithubUser } from "../entities/user";

type Output =
	| { success: true; user: GithubUser }
	| { success: false; user: undefined };

type Setup = () => Promise<Output>;

export const fetchGithubUserService: Setup = async () => {
	try {
		const response = await fetch("https://api.github.com/user/9gods");
		if (!response.ok) {
			console.error("Fetch returned !ok: ", { response });
			return {
				success: false,
				user: undefined,
			};
		}
		const data = await response.json();

		const user: GithubUser = {
			id: data.id,
			login: data.login,
			avatarUrl: data.avatar_url,
			name: data.name,
			email: data.email,
			bio: data.bio,
			location: data.location,
			blog: data.blog,
			company: data.company,
			twitterUsername: data.twitter_username,
			publicRepos: data.public_repos,
			followers: data.followers,
			following: data.following,
			createdAt: data.created_at,
			updatedAt: data.updated_at,
		};

		return {
			success: true,
			user,
		};
	} catch (error) {
		console.error(
			"An unknown error occurred while fetching the 9god's github user: ",
			error,
		);
		return {
			success: false,
			user: undefined,
		};
	}
};
