<script>
	export let post;
</script>

<div class="post">
	<div class="post-body">
		<p>{post.title}</p>
	</div>
	<div class="post-footer">
		<div class="post-footer-text">
			<span>{post.authorName}</span>
			<br />
			<span>{new Date(post.timestamp).toLocaleString()}</span>
		</div>
	</div>
</div>

<style>
	.post-body {
		font-size: 1.5rem;
	}

	.post {
		/* background-color: #333; */
		/* border: 1px solid black; */
		/* border-radius: 5px; */
		padding: 100px 0;
		margin: 100px 0;
	}
</style>
