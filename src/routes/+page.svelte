<script>
	import { Collection, SignedIn } from 'sveltefire';
	import { userStore } from 'sveltefire';
	import { auth } from '$lib/firebase'; // your firebase auth instance
	import { doc, addDoc, collection } from 'firebase/firestore';
	import { firestore } from '$lib/firebase'; // your firestore instance
	import { query, orderBy } from 'firebase/firestore';

	import Post from './Post.svelte';
	let newPostText = '';
	let isAnonymous = false;

	async function post(user) {
		if (!newPostText) return;
		if (!user) return;

		const post = {
			title: newPostText,
			timestamp: Date.now(),
			authorId: user.uid,
			authorName: user.displayName,
			authorPhoto: user.photoURL,
			isAnonymous: false
		};

		// add post to firestore
		// set doc in firestore to newNote data
		await addDoc(collection(firestore, 'posts'), post);

		newPostText = '';
	}
</script>

<svelte:head>
	<title>Sezimi</title>
	<meta name="description" content="Online journal social media" />
</svelte:head>

<br />

<SignedIn let:user>
	<textarea
		on:keydown={(e) => e.key === 'Enter' && e.ctrlKey && post(user)}
		bind:value={newPostText}
		name="post"
		id="hi"
		cols="30"
		rows="10"
		placeholder="What do you want to say?"
	/>
	<label for="anonymous">Anonymously Post</label>
	<input type="checkbox" bind:value={isAnonymous} name="anonymous" id="anonymous" />
	<button on:click={post(user)}>Post</button>
</SignedIn>

<Collection
	ref={query(collection(firestore, 'posts'), orderBy('timestamp', 'desc'))}
	let:data
	let:count
>
	<p>Found {count} posts</p>

	{#each data as post}
		<!-- <p>{post.title}</p> -->

		<Post {post} />
	{/each}

	<p slot="loading">Loading...</p>
</Collection>
