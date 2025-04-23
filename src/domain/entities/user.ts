export type GithubUser = {
	id: number;
	login: string;
	avatarUrl: string;
	name: string | null;
	email: string | null;
	bio: string | null;
	location: string | null;
	blog: string | null;
	company: string | null;
	twitterUsername: string | null;
	publicRepos: number;
	followers: number;
	following: number;
	createdAt: string;
	updatedAt: string;
};
