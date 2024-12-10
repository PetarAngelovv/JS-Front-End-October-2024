function attachEvents() {
    //   baseUrl = 'http://localhost:3030/jsonstore/blog/posts
    // comments = http://localhost:3030/jsonstore/blog/comments
    baseUrl = 'http://localhost:3030/jsonstore/blog';

    const SelectedPosts  = document.querySelector('#posts');

    const postTitleEl = document.querySelector('#post-title');    
    const postBodyEl = document.querySelector('#post-body');
    const postCommentsEl = document.querySelector('#post-comments');

    document.querySelector('#btnLoadPosts').addEventListener('click',LoadHandler);
    document.querySelector('#btnViewPost').addEventListener('click',PostsHandler);
   
    function LoadHandler(e){
        SelectedPosts.innerHTML = '';
    fetch(baseUrl + '/posts')
     .then(response => response.json())
     .then(posts => {
        Object.values(posts).forEach(post => {
            const optionEl = document.createElement('option');
          
            Object.assign(optionEl.dataset, post);

            // optionEl.dataset.id = post.id;
            // optionEl.dataset.title = post.title;
            // optionEl.dataset.body = post.body;

            optionEl.textContent = post.title;
            SelectedPosts.append(optionEl);
        });
     })
     .catch(error => console.error('Error', error));
    }

    function PostsHandler(e){
      fetch(baseUrl + '/comments')
        .then(response => response.json())
        .then(comments =>{

            const optionEl = SelectedPosts.querySelector('option:checked');


            postTitleEl.textContent = optionEl.dataset.title;
            postBodyEl.textContent = optionEl.dataset.body;

            Object.values(comments).forEach(comment=>{

                if (comment.postId === optionEl.dataset.id){
                    const commentEl = document.createElement('li');
                    commentEl.textContent = comment.text;
                    postCommentsEl.append(commentEl);
                }
                
            });
            
        })
    }
}

attachEvents();