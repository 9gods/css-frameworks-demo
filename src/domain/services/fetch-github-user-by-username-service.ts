"use server";

import type { GithubUser } from "../entities/user";

type Input = {
	username: string;
};

type Output =
	| { success: true; user: GithubUser }
	| { success: false; user: undefined };

type Setup = (input: Input) => Promise<Output>;

export const fetchGithubUserService: Setup = async (input) => {
	try {
		const response = await fetch(
			"https://api.github.com/user/".concat(input.username),
		);

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
			`An unknown error occurred while fetching the github user ${input.username}: `,
			error,
		);
		return {
			success: false,
			user: undefined,
		};
	}
};
